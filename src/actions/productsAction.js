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
    WRONG_PRODUCT_DELETE,
    SUCCESSFUL_PRODUCT_EDIT,
    WRONG_PRODUCT_EDIT,
    START_EDIT_PRODUCT,
    SET_PRODUCT_EDIT,
    START_SET_EDIT_PRODUCT,
    WRONG_SET_PRODUCT_EDIT
} from '../types';

export const addProductAction = product => {
    return async (dispatch) => {
        dispatch(addProduct());
        try {
            const newProduct = await axiosClient.post('/api/products', product);
            dispatch(successfullyAddedProduct(newProduct.data));
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            );
        } catch (error) {
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
            const response = await axiosClient.get('/api/products');
            dispatch(successfulProductsDownload(response.data));
        } catch (error) {
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
            await axiosClient.delete(`api/products/${id}`);
            dispatch(successfulProductDelete());
            Swal.fire(
                'Eliminado',
                'El producto se eliminó correctamente',
                'success'
            );
        } catch (error) {
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

export const startEditProductAction = product => {
    return async (dispatch) => {
        dispatch(startEditProduct());
        try {
            await axiosClient.put(`/api/products/${product._id}`, product);
            dispatch(succesfulProductEdit(product));
        } catch (error) {
            dispatch(wrongProductEdit());
        }
    }
}

const startEditProduct = () => ({
    type: START_EDIT_PRODUCT
})

const succesfulProductEdit = product => ({
    type: SUCCESSFUL_PRODUCT_EDIT,
    payload: product
})

const wrongProductEdit = () => ({
    type: WRONG_PRODUCT_EDIT,
    payload: true
})

export const setProductEditAction = productId => {
    return async dispatch => {
        dispatch(startSetEditProduct());
        try {
            const response = await axiosClient.get(`/api/products/${productId}`)
            dispatch(setProductEdit(response.data));
        } catch (error) {
            dispatch(wrongSetProductEdit());
        }
    }
}

const startSetEditProduct = () => ({
    type: START_SET_EDIT_PRODUCT
})

const setProductEdit = product => ({
    type: SET_PRODUCT_EDIT,
    payload: product
})

const wrongSetProductEdit = () => ({
    type: WRONG_SET_PRODUCT_EDIT,
    payload: true
})
