import { useQuery } from "@apollo/client";
import {getProductList} from "../../graphql/queries"

type itemsTypes = {
    id: string | number;
    description: string;
    name: string;
};

export function ProductList() {
  const { data, loading, error } = useQuery(getProductList);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, something went wrong :(</p>;

  return (<>
      {data.products.items.map(({id, name, description}: itemsTypes) => (
              <div key={id}>
                  <h3>{name}</h3>
                  <p>{description}</p>
              </div>
          )
      )}
  </>);
}
