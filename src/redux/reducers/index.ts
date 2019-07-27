import * as types from '../constants/types';
const initialState = {
    questions : []
}

export const getQuestionsReducer = ( state:any = initialState , action:any) => {
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