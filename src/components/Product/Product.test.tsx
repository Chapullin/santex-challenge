import { MockedProvider } from "@apollo/client/testing";
import {
    render,
    waitFor,
    screen,
    act,
} from "@testing-library/react";
import { mutationAddItemToOrder } from "../../graphql/mutations";
import { Product } from "./Product";
import React from "react";

const itemProps = {
    id: 1,
    description: "description mock",
    name: "name mock",
    variants: [{ id: 1, price: "1111" }],
    featuredAsset: {
        source: "imgUrl",
    },
};

const productMock = {
    request: {
        query: mutationAddItemToOrder,
        variables: {
            productVariantId: "test-id",
            quantity: 1,
        },
    },
    result: {
        data: {
            addItemToOrder: {
                __typename: "Order",
                subTotal: itemProps.variants[0].price,
            },
        },
    },
};


describe("Product", () => {
    it(
        "should show product, image and price ",
        async () => {
            render(
                <MockedProvider mocks={[productMock]} addTypename={false}>
                    <Product {...itemProps} />
                </MockedProvider>
            );

            await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
            const { getByText } = screen;
            const displayedImage = document.querySelector("img") as HTMLImageElement;
            const { src } = displayedImage;

            await waitFor(() => {
                expect(getByText("description mock")).toBeInTheDocument();
                expect(getByText("AR$ 1111")).toBeInTheDocument();
                expect(getByText("name mock")).toBeInTheDocument();
                expect(src).toContain("imgUrl");
            });

            //TODO if the button shows a feedback/reaction on click,
            // it could be tested here with fireEvent.click()
    });

    it("should match snapshot Header", async () => {
        const { container } = render(
            <MockedProvider mocks={[productMock]} addTypename={false}>
                <Product {...itemProps} />
            </MockedProvider>
        );
        await waitFor(() => {
            expect(container.firstChild).toMatchSnapshot();
        });
    });

});
