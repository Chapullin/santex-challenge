import { useQuery } from "@apollo/client";
import {getProductList} from "../../graphql/queries"
import { Product } from "../Product/Product";

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

export function ProductList() {
    const { data, loading, error } = useQuery(getProductList);


    // TODO put a spinner in the loading
    if (loading) return <p>Loading... Please wait</p>;
    if (error) return <p>Error, something went wrong :(</p>;


    return <>
        {data.products.items.map((itemProps: itemsTypes) =>
            <Product key={itemProps.id} {...itemProps}/>
        )}
  </>;
}
