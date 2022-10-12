import { useStateWithStorage } from "../../hooks/useStateWithStorage";
import { FloatNav, Price } from "./styles";

export function Header() {
    const { subTotal } = useStateWithStorage();

    return (
    <FloatNav style={{ background: 'red' }}>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <Price>AR$ { subTotal }</Price>
    </FloatNav>
  );
}
