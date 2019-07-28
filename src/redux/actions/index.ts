import * as types from '../constants/types';

export const getQuestionsAction = ( result:any ) => ({
    type: types.GETQUESTIONS,
    result
});

export const onSaveResponseAction = ( result:any ,responses:any) => ({
    type: types.ONSAVERESPONSES,
    result: result.data,
})


