import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { name, price, id } = product;

    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td className="acciones">
                <Link to={`/productos/editar/${id}`} className="btn btn-warning mr-2">Editar</Link>
                <button className="btn btn-danger" type="button">Eliminar</button>
            </td>
        </tr>
    );

}

export default Product;