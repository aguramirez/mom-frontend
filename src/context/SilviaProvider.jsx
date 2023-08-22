import { useSilvia } from "../hooks/useSilvia"
import { SilviaContext } from "./SilviaContext"

export const SilviaProvider = ({ children }) => {
    const {
        pagos,
        handlerAddPago,
    } = useSilvia();

    return (
        <SilviaContext.Provider value={
            {
                pagos,
                handlerAddPago,
            }
        }>
            {children}
        </SilviaContext.Provider>
    )
}