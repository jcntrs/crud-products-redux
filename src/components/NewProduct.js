import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAction } from '../actions/productsAction';

const NewProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch()

    const addProduct = product => dispatch(addProductAction(product));

    const handleSubmit = event => {
        event.preventDefault();
        if (name.trim() === '' || price <= 0) {
            return
        }
        addProduct({
            name,
            price
        });
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Agregar Nuevo Producto</h2>
                        <form onSubmit={handleSubmit}>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;