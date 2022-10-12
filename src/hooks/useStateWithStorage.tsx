import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";

const subTotalContext = createContext({
    subTotal: 0,
    setSubTotal: (_num: number) => {},
});

export const Provider = ({ children }: { children: ReactNode }) => {
    const [subTotal, setSubTotal] = useState(0);
    console.log('\x1b[42m START provider === \x1b[0m');

    // set initialTotal localStorage
    useEffect(() => {
        const initialSubTotal = JSON.parse(localStorage.getItem('subTotal') || '0' );
        setSubTotal(+initialSubTotal);
    }, []);

    // update Total on every change
    useEffect(() => {
        localStorage.setItem("subTotal", JSON.stringify(subTotal));
        console.log('localStorage', localStorage);
    }, [subTotal]);

    return (
        <subTotalContext.Provider value={{ subTotal, setSubTotal }}>
            {children}
        </subTotalContext.Provider>
    );
};

export const useStateWithStorage = () => {
    const { subTotal, setSubTotal } = useContext(subTotalContext);
    return { subTotal, setSubTotal };
};
