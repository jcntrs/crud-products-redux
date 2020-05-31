import { combineReducers } from 'redux';
import producstReducer from './productsReducer';
import alertsReducer from './alertsReducer';

export default combineReducers({
    products: producstReducer,
    alerts: alertsReducer
});