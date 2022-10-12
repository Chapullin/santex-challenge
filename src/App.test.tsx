import { MockedProvider } from '@apollo/client/testing';
import { render, act } from '@testing-library/react';
import { ProductList } from './components/ProductList/ProductList';

describe('ProductList', () => {
  it('renders text and button', (async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
  }));
});
