import { useMutation } from "@apollo/client";
import { useStateWithStorage } from "../../hooks/useStateWithStorage";
import {mutationAddItemToOrder} from "../../graphql/mutations";
import { Item, Price, Button } from "./styles";

// TODO extract into a file with cross types itemsTypes, assetType, variantsType
type itemsTypes = {
    id: string | number,
    description: string,
    name: string,
    featuredAsset: assetType,
    variants: variantsType[],
};

type assetType = {
    source: string,
};

type variantsType = {
    price: string
    id: number
}

export const Product = (itemProps: itemsTypes) => {
    const {
        id,
        name,
        description,
        featuredAsset,
        variants,
    } = itemProps;
    const { subTotal, setSubTotal } = useStateWithStorage();

    const [addItemToOrder] = useMutation(mutationAddItemToOrder, {
        onCompleted: (data) => {
            if (data.addItemToOrder.__typename === 'Order') {
                setSubTotal(subTotal + data.addItemToOrder.subTotal);
            }
            // TODO implement a logger
            console.log('Success! Product added to cart.');
        },
        onError: () => {
            // TODO implement a logger
            console.error('Error! Something was wrong adding the product to cart.')
        },
    });

  return (
      <Item>
          <div key={id}>
              <h2>{name}</h2>

              <img src={featuredAsset.source}
                   alt={name}
                   width="100%"
                   height="auto"
              />
              <p>{description}</p>
              <Button
                  onClick={()=>addItemToOrder({
                      variables: {
                          productVariantId: variants[0].id,
                          quantity: 1,
                      },
                  })}
              >
                  {
                      // TODO this button needs to show a feedback onClick
                      //  or the subTotal at header should flash on update.
                  }
                  ADD ITEM
              </Button>
              <Price>AR$ {variants[0].price}</Price>
          </div>
      </Item>
  );
}
