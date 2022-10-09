import { useQuery } from "@apollo/client";
import {getProductList} from "../../graphql/queries"

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
}

export function ProductList() {
  const { data, loading, error } = useQuery(getProductList);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, something went wrong :(</p>;

  return (<>
      {data.products.items.map(({id, name, description, featuredAsset, variants}: itemsTypes) => (
              <div key={id}>
                  <h3>{name}</h3>
                  <p>AR$ {variants[0].price}</p>
                  <p>{description}</p>
                  <img src={featuredAsset.source} alt=""/>
                  <button>
                      Add item to cart
                  </button>
              </div>
          )
      )}
  </>);
}
