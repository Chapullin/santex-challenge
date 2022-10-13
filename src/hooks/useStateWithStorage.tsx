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

    // set initial subTotal localStorage
    useEffect(() => {
        const initialSubTotal = JSON.parse(localStorage.getItem('subTotal') || '0' );
        setSubTotal(+initialSubTotal);
    }, []);

    // update subTotal on every change
    useEffect(() => {
        localStorage.setItem("subTotal", JSON.stringify(subTotal));
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
