import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductAction, editProductAction } from '../actions/productsAction';
import Swal from 'sweetalert2';

const Product = ({ product }) => {

    const { name, price, id } = product;

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClickDelete = id => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Un producto eliminado no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                dispatch(deleteProductAction(id));
            }
        });
    }

    const handleClickEdit = id => {
        dispatch(editProductAction(product));
        history.push(`/productos/editar/${product.id}`);
    }

    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td className="acciones">
                <button type="button" className="btn btn-warning mr-2" onClick={() => handleClickEdit(product)}>Editar</button>
                <button className="btn btn-danger" type="button" onClick={() => handleClickDelete(id)}>Eliminar</button>
            </td>
        </tr>
    );

}

export default Product;