import { render, waitFor, screen } from "@testing-library/react";
import React from 'react';

import { Header } from "./Header";

describe("Header", () => {
    it("renders Header with img and price subTotal", async () => {
        render(<Header />);

        const { getByText } = screen;
        const displayedImage = document.querySelector("img") as HTMLImageElement;

        await waitFor(() => {
            expect(displayedImage.src).toContain("https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png");
            expect(getByText(/0/)).toBeInTheDocument();
        });
    });

    it("should match snapshot Header", async () => {
        const { container } = render(<Header />);
        await waitFor(() => {
            expect(container.firstChild).toMatchSnapshot();
        });
    });
});
