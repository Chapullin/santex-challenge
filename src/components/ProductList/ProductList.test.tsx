import { MockedProvider } from "@apollo/client/testing";
import {act, render, screen, waitFor} from "@testing-library/react";
import { getProductList } from "../../graphql/queries";
import { ProductList } from "./ProductList";

describe("ProductList", () => {
    it("shows an error message when the query fails", async () => {
        const productListMock = {
            request: {
                query: getProductList,
            },
            error: new Error("error"),
        };
        render(
            <MockedProvider mocks={[productListMock]} addTypename={false}>
                <ProductList />
            </MockedProvider>
        );

        await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

        const { getByText } = screen;
        expect(getByText("Error, something went wrong :(")).toBeInTheDocument();
    });
    it("shows the loading message", async () => {
        render(
            <MockedProvider mocks={[]} addTypename={false}>
                <ProductList />
            </MockedProvider>
        );

        const { getByText } = screen;
        expect(getByText("Loading... Please wait")).toBeInTheDocument();
    });
    it('should match the snapshot', async () => {
        const productListMock = {
            request: {
                query: getProductList,
            },
        };
        const {container} = render(
            <MockedProvider mocks={[productListMock]} addTypename={false}>
                <ProductList/>
            </MockedProvider>
        );
        await waitFor(() => {
            expect(container.firstChild).toMatchSnapshot();
        });
    });
});
