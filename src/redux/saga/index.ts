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
    console.log(result);
    yield put(onSaveResponseAction(result));
}

export function* watchForSaveResponses(){
    yield takeEvery(types.SAVERESPONSES,onForSaveResponses);
}

export default function* rootSaga(){
    yield all([
        watchForGetQuestions(),
        watchForSaveResponses()
    ]);
}