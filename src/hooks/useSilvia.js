import { useReducer, useState } from "react";
import { silviaReducer } from "../reducers/siliviaReducer";

const initialData = [
    {
        id:1,
        mes: 'agosto',
        servicio: 'gasnor',
        monto: 17000,
    }
];

export const useSilvia = () => {

    const [pagos, dispatch] = useReducer(silviaReducer, initialData);

    const handlerAddPago = (pago) => {
        dispatch({
            type: 'addPago',
            payload: pago,
        })
    }
    return {
        pagos,
        handlerAddPago,
    }
}