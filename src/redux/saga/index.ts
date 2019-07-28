import {  call,all ,put,takeEvery} from 'redux-saga/effects';
import { getQuestions, saveResponse } from '../apis';
import { getQuestionsAction, onSaveResponseAction } from '../actions';
import  * as types from '../constants/types';

export function* watchForGetQuestions(){

    const result = yield call(getQuestions);
    yield put(getQuestionsAction(result));
   
}


export function* onForSaveResponses(request:any){
    const result = yield call(saveResponse,request);
    yield put(onSaveResponseAction(result,request));
    
}

export function* watchForSaveResponses(){
    yield takeEvery(types.SAVERESPONSES,onForSaveResponses);
}

export function* watchForResult(){
    yield '';
}

export default function* rootSaga(){
    yield all([
        watchForGetQuestions(),
        watchForSaveResponses(),
        watchForResult(),
    ]);
}