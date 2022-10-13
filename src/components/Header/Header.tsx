import { useStateWithStorage } from "../../hooks/useStateWithStorage";
import { FloatNav, Price } from "./styles";
import {useEffect, useState} from "react";

export function Header() {
    const { subTotal } = useStateWithStorage();
    const [blink, setBlink] = useState(false);

    useEffect(() => {
        if (!blink && (subTotal !== 0)) {
                setBlink( true );
                setTimeout(() => {
                    setBlink(false)
                }, 1500)
        }
    },[subTotal]);

    return (
    <FloatNav style={{ background: 'red' }}>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <Price blink={blink} >AR$ { subTotal }</Price>
    </FloatNav>
  );
}
