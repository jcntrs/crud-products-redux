import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startEditProductAction, setProductEditAction } from '../actions/productsAction';
import { useHistory } from 'react-router-dom';

const EditProduct = props => {

    const productId = props.match.params.id;
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        id: 0
    });

    const history = useHistory();
    const dispatch = useDispatch();
    const editProduct = useSelector(state => state.products.editProduct);

    const handleChange = event => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(startEditProductAction(product));
        history.push('/');
    }

    useEffect(() => {
        const loadProductEdit = () => dispatch(setProductEditAction(productId));
        loadProductEdit();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        editProduct && setProduct(editProduct[0]);
    }, [editProduct]);

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Editar Producto</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Nombre del Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del producto"
                                    name="name"
                                    value={product.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio del producto"
                                    name="price"
                                    value={product.price}
                                    onChange={handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-success font-weight-bold d-block w-100 text-uppercase"
                            >
                                Guardar Cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EditProduct;