import Axios from 'axios';

export function getQuestions(){
    let ret = [];
    return Axios.get('http://localhost:8000/api/v1/questions')
    .then( r => r.data.questions)
    .catch( e => console.log({e}))
}