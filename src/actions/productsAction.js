import axiosClient from '../config/axios';
import Swal from 'sweetalert2'
import {
    ADD_PRODUCT,
    SUCCESSFULLY_ADDED_PRODUCT,
    ERROR_ADDING_PRODUCT
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
                icon:'error',
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
});

const errorAddingProduct = status => ({
    type: ERROR_ADDING_PRODUCT,
    payload: status
})