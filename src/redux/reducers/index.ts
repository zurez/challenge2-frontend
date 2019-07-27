import * as types from '../constants/types';
import { combineReducers } from 'redux';
const initialState = {
    questions : [],
}

export const reducer = ( state:any = initialState , action:any) => {
    switch ( action.type ){
        case types.GETQUESTIONS:
            return {
                ...state,
                questions : action.result
            };
        default:
            return state;
    }
}

export default combineReducers({
    reducer
})