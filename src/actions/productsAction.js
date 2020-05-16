import {
    ADD_PRODUCT,
    SUCCESSFULLY_ADDED_PRODUCT,
    ERROR_ADDING_PRODUCT
} from '../types';

export const addProductAction = product => {
    return () => {
        console.log(product)
    }
}