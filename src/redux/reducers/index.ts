import * as types from '../constants/types';
import { combineReducers } from 'redux';

const initialState = {
    questions : [],
    redirectStatus:"",
    data :{},
    responses:{}
}
export const reducer = ( state:any = initialState , action:any) => {
    switch ( action.type ){
        case types.GETQUESTIONS:
            return {
                ...state,
                questions : action.result
            };
        case types.SAVERESPONSES:
            return {
                ...state,
                data: action.result
            }
        case types.ONSAVERESPONSES:
            return {
                ...state,
                redirectStatus : action.result.status,
                personalityType : action.result.personalityType
            }
        default:
            return state;
    }
}

export default combineReducers({
    reducer
})