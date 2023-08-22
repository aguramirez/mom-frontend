import { useContext, useState } from 'react'
import './SilviaPage.css'
import { SilviaContext } from '../context/SilviaContext'

const initialPagoForm = {
    id: 0,
    mes: '',
    servicio: '',
    monto: 0,
}

export const SilviaPage = () => {

    const { pagos, handlerAddPago } = useContext(SilviaContext);
    const [pagoForm, setPagoForm] = useState(initialPagoForm);

    const onInputChange = ({ target }) => {
        // console.log(target.name)
        // console.log(target.value)
        const {name, value} =target;
        setPagoForm({
            ...pagoForm,
            [name]: value,
        })

    }

    const onSubmit = (event) => {
        event.preventDefault();
        handlerAddPago(pagoForm)
    }

    return (
        <>
            <div className="container">
                <h2>Ingresar datos:</h2>
                <div className="row">
                    <form onSubmit={onSubmit}>
                        <div className='col-3'>
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Mes</label>
                                <select className="form-select" id="inputGroupSelect01"
                                    onChange={onInputChange}
                                    name='mes'>
                                    <option defaultValue>Mes</option>
                                    <option value="enero">Enero</option>
                                    <option value="febrero">Febrero</option>
                                    <option value="marzo">Marzo</option>
                                    <option value="abril">Abril</option>
                                    <option value="mayo">Mayo</option>
                                    <option value="junio">Junio</option>
                                    <option value="julio">Julio</option>
                                    <option value="agosto">Agosto</option>
                                    <option value="septiembre">Septiembre</option>
                                    <option value="octubre">Octubre</option>
                                    <option value="noviembre">Noviembre</option>
                                    <option value="diciembre">Diciembre</option>
                                </select>
                            </div>
                        </div>

                        <div className='col-3'>
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Servicio</label>
                                <select className="form-select" id="inputGroupSelect01"
                                    onChange={onInputChange}
                                    name='servicio'>
                                    <option defaultValue>Servicio</option>
                                    <option value="ejesa">Ejesa</option>
                                    <option value="gasnor">Gasnor</option>
                                    <option value="osde">Osde</option>
                                    <option value="claro">Claro</option>
                                    <option value="flow">Flow</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">$</span>
                                <input type="text" className="form-control" placeholder="Monto" aria-label="Username" aria-describedby="basic-addon1"
                                onChange={onInputChange}
                                name='monto' />
                            </div>
                        </div>
                        <div className="col-3">
                            <button className='btn btn-primary'>Guardar</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container my-5">
                <button className='btn btn-warning mx-2'>Enero</button>
                <button className='btn btn-warning mx-2'>Febrero</button>
                <button className='btn btn-warning mx-2'>Marzo</button>
                <button className='btn btn-warning mx-2'>Abril</button>
                <button className='btn btn-warning mx-2'>Mayo</button>
                <button className='btn btn-warning mx-2'>Junio</button>
                <button className='btn btn-warning mx-2'>Julio</button>
                <button className='btn btn-warning mx-2'>Agosto</button>
                <button className='btn btn-warning mx-2'>Septiembre</button>
                <button className='btn btn-warning mx-2'>Octubre</button>
                <button className='btn btn-warning mx-2'>Noviembre</button>
                <button className='btn btn-warning mx-2 my-2'>Diciembre</button>
            </div>

            <div className='container my-5'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Mes</th>
                            <th scope="col">Servicio</th>
                            <th scope="col">Monto</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pagos?.map(({ id, mes, servicio, monto }) => (
                                <tr key={id}>
                                    <th scope="row">{id}</th>
                                    <td>{mes}</td>
                                    <td>{servicio}</td>
                                    <td>{monto}</td>
                                    <td><button className='btn btn-danger'>eliminar</button></td>
                                </tr>
                            ))}
                        <tr>
                            <td></td>
                            <td>Total</td>
                            <td>$$$$$</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}