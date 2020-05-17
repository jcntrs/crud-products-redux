import {
    ADD_PRODUCT,
    SUCCESSFULLY_ADDED_PRODUCT,
    ERROR_ADDING_PRODUCT
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    products: [],
    loading: false,
    error: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case SUCCESSFULLY_ADDED_PRODUCT:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case ERROR_ADDING_PRODUCT:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state;
    }
}