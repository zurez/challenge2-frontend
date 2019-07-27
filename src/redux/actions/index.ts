import * as types from '../constants/types';

export const getQuestionsAction = ( result:any ) => ({
    type: types.GETQUESTIONS,
    result
});