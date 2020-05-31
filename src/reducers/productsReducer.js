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
    WRONG_PRODUCT_EDIT,
    START_EDIT_PRODUCT,
    SET_PRODUCT_EDIT
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
        case START_EDIT_PRODUCT:
        case PRODUCTS_DOWNLOAD:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case SUCCESSFULLY_ADDED_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                loading: false,
                error: false
            }
        case WRONG_PRODUCT_EDIT:
        case WRONG_PRODUCT_DELETE:
        case WRONG_PRODUCTS_DOWNLOAD:
        case ERROR_ADDING_PRODUCT:
            return {
                ...state,
                loading: false,
                error: action.payload
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
                products: state.products.filter(element => element._id !== state.deleteProduct),
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
                products: state.products.map(element => element._id === action.payload._id ? element = action.payload : element),
                loading: false,
                editProduct: null
            }
        case SET_PRODUCT_EDIT:
            return {
                ...state,
                editProduct: state.products.filter(element => element._id === action.payload)
            }
        
        default:
            return state;
    }
}