import {
    ADD_PRODUCT,
    SUCCESSFULLY_ADDED_PRODUCT,
    ERROR_ADDING_PRODUCT,
    PRODUCTS_DOWNLOAD,
    SUCCESSFUL_PRODUCTS_DOWNLOAD,
    WRONG_PRODUCTS_DOWNLOAD
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    products: [],
    loading: false,
    error: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_DOWNLOAD:
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
        case WRONG_PRODUCTS_DOWNLOAD:
        case ERROR_ADDING_PRODUCT:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case SUCCESSFUL_PRODUCTS_DOWNLOAD:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: false,
            }

        default:
            return state;
    }
}