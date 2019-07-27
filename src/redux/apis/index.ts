import Axios from 'axios';

export function getQuestions():Promise<any>{
 
    return Axios.get('http://localhost:8000/api/v1/questions')
    .then( r => r.data.questions)
    .catch( e => []);
}

export function saveResponse(response:{}){
    return Axios.post('http://localhost:8000/api/v1/user/response',response)
    .then( r => r)
    .catch( e => ({status: 'error'}))
    ;
}