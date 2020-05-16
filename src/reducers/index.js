import { combineReducers } from 'redux';
import producstReducer from './productsReducer';

export default combineReducers({
    products: producstReducer
})