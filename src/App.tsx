import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { Provider } from "./hooks/useStateWithStorage";

function App() {
  return (
    <Provider>
      <Header></Header>
      <div>
        <ProductList></ProductList>
      </div>
    </Provider>
  );
}

export default App;
