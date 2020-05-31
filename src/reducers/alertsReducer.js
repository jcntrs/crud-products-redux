import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types';

const initialState = {
    alert: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case HIDE_ALERT:
        case SHOW_ALERT:
            return {
                alert: action.payload
            }

        default:
            return state;
    }
}