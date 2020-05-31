import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction } from '../actions/productsAction';
import { showAlertAction, hideAlertAction } from '../actions/alertsAction';
import Spinner from './Spinner';

const NewProduct = ({ history }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const loading = useSelector(state => state.products.loading);
    const alert = useSelector(state => state.alerts.alert);

    const dispatch = useDispatch()

    const addProduct = product => dispatch(addProductAction(product));

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (name.trim() === '' || price <= 0) {
            const alert = {
                class: 'alert alert-danger text-center p3',
                message: 'Los campos son obligatorios'
            }
            dispatch(showAlertAction(alert));
            return
        }
        dispatch(hideAlertAction());
        await addProduct({
            name,
            price
        });
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Agregar Nuevo Producto</h2>
                        {alert && <p className={alert.class}>{alert.message}</p>}
                        {loading
                            ? <Spinner />
                            : <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nombre del Producto</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre del producto"
                                        name="name"
                                        value={name}
                                        onChange={event => setName(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Precio del producto"
                                        name="price"
                                        value={price}
                                        onChange={event => setPrice(Number(event.target.value))}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success font-weight-bold d-block w-100 text-uppercase"
                                >
                                    Agregar
                                </button>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;