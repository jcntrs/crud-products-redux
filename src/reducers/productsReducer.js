import {
    ADD_PRODUCT,
    SUCCESSFULLY_ADDED_PRODUCT,
    ERROR_ADDING_PRODUCT
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    products: [],
    error: false,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        /* case value:
            
            break; */

        default:
            return state;
    }
}