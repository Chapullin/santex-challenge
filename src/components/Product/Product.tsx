import { useMutation } from "@apollo/client";
import { useStateWithStorage } from "../../hooks/useStateWithStorage";
import {mutationAddItemToOrder} from "../../graphql/mutations";

// TODO extract into a file with cross types itemsTypes, assetType, variantsType
type itemsTypes = {
    id: string | number;
    description: string;
    name: string;
    featuredAsset: assetType
    variants: variantsType[]
};

type assetType = {
    source: string;
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

  return (<>
      <div key={id}>
          <h3>{name}</h3>
          <p>AR$ {variants[0].price}</p>
          <p>{description}</p>
          <button
              onClick={()=>addItemToOrder({
                  variables: {
                      productVariantId: variants[0].id,
                      quantity: 1,
                  },
              })}
          >
              Add item to cart
          </button>
          <img src={featuredAsset.source} alt=""/>
      </div>
  </>);
}
