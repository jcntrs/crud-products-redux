import axiosClient from '../config/axios';
import Swal from 'sweetalert2'
import {
    ADD_PRODUCT,
    SUCCESSFULLY_ADDED_PRODUCT,
    ERROR_ADDING_PRODUCT,
    PRODUCTS_DOWNLOAD,
    SUCCESSFUL_PRODUCTS_DOWNLOAD,
    WRONG_PRODUCTS_DOWNLOAD,
    DELETE_PRODUCT,
    SUCCESSFUL_PRODUCT_DELETE,
    WRONG_PRODUCT_DELETE
} from '../types';

export const addProductAction = product => {
    return async (dispatch) => {
        dispatch(addProduct());
        try {
            await axiosClient.post('/productos', product);
            dispatch(successfullyAddedProduct(product));
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            );
        } catch (error) {
            console.log(error)
            dispatch(errorAddingProduct(true));
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Intenta de nuevo'
            });
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT
})

const successfullyAddedProduct = product => ({
    type: SUCCESSFULLY_ADDED_PRODUCT,
    payload: product
})

const errorAddingProduct = status => ({
    type: ERROR_ADDING_PRODUCT,
    payload: status
})

export const getProductsAction = () => {
    return async (dispatch) => {
        dispatch(productsDownload());
        try {
            const response = await axiosClient.get('/productos');
            dispatch(successfulProductsDownload(response.data));
            console.log(response.data)
        } catch (error) {
            console.log(error)
            dispatch(wrongProductsDownload());
        }
    }
}

const productsDownload = () => ({
    type: PRODUCTS_DOWNLOAD
})

const successfulProductsDownload = products => ({
    type: SUCCESSFUL_PRODUCTS_DOWNLOAD,
    payload: products
})

const wrongProductsDownload = () => ({
    type: WRONG_PRODUCTS_DOWNLOAD,
    payload: true
})

export const deleteProductAction = id => {
    return async (dispatch) => {
        dispatch(deleteProduct(id));
        try {
            await axiosClient.delete(`/productos/${id}`);
            dispatch(successfulProductDelete());
            Swal.fire(
                'Eliminado',
                'El producto se eliminó correctamente',
                'success'
            );
        } catch (error) {
            console.log(error)
            dispatch(wrongProductDelete());
        }
    }
}

const deleteProduct = id => ({
    type: DELETE_PRODUCT,
    payload: id
})

const successfulProductDelete = () => ({
    type: SUCCESSFUL_PRODUCT_DELETE
})

const wrongProductDelete = () => ({
    type: WRONG_PRODUCT_DELETE,
    payload: true
})