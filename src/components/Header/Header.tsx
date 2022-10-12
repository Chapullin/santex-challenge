import { useStateWithStorage } from "../../hooks/useStateWithStorage";

export function Header() {
    const { subTotal } = useStateWithStorage();

    return (
    <header style={{ background: 'red' }}>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <div>AR$ { subTotal }</div>
    </header>
  );
}
