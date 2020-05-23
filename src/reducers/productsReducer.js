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
    EDIT_PRODUCT,
    SUCCESSFUL_PRODUCT_EDIT,
    WRONG_PRODUCT_EDIT
} from '../types';

// Cada reducer tiene su propio state
const initialState = {
    products: [],
    loading: false,
    error: false,
    deleteProduct: null,
    editProduct: null
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
        case WRONG_PRODUCT_EDIT:
        case WRONG_PRODUCT_DELETE:
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
        case DELETE_PRODUCT:
            return {
                ...state,
                deleteProduct: action.payload
            }
        case SUCCESSFUL_PRODUCT_DELETE:
            return {
                ...state,
                products: state.products.filter(element => element.id !== state.deleteProduct),
                deleteProduct: null
            }
        case EDIT_PRODUCT:
            return {
                ...state,
                editProduct: action.payload
            }
        case SUCCESSFUL_PRODUCT_EDIT:
            return {
                ...state,
                products: state.products.map(element => element.id === action.payload.id ? element = action.payload : element),
                editProduct: null
            }

        default:
            return state;
    }
}