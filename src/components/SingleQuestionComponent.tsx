import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RadioInput } from './RadioComponent';
import { SaveAndContinue } from './SaveAndContinueComponent';
import { EmailInput } from './EmailInputComponent';
import { validateEmail } from '../helper';
import * as types from '../redux/constants/types';
import { onSaveResponseAction } from '../redux/actions';
import { Redirect } from 'react-router-dom';

interface Props{
    dispatcher : any,
    questions : Array<any>,
    
}

interface States{
    responses : Array<any>,
    errors : Array<string>,
    email : string
}

class QuestionComponent extends Component<Props,States> {

    constructor(props:any) {
        super(props)
    
        this.state = {
             responses:[],
             errors:[],
             email:""
        }
    }
    

    createRadios = (data:any) => {
        const ret = [
            
            <label className="disagree sideText"  key={10} >Disagree</label>
        ];
        for(let i = 0 ; i <7 ; i++){
            ret.push(
                <RadioInput name = {data.id} value ={i+1} key={i} />
            );
        }
        ret.push(<label className="agree sideText"  key={9} >Agree</label>);
        return ret;
    }

    createQuestionBox = (data:any) => {
        const radios = this.createRadios(data);
        return(
            <div key={data.id} className="ui text container bdr mrgn-tp eaual-spc center aligned form-container bdr-corner">
                <div className="ui form">
                    <span className="questionTitle">{data.title}</span>
                    <div className="inline fields mrgn-tp20 sub-content"
                        onChange = { e => this.onRadionChange(e)}
                    >
                        {radios}
                    </div>
                </div>
            </div>
        );
    }
    onRadionChange = (event:any) => {
        const responses = this.state.responses;
        let modified = false;
        responses.map( ( e,i ) => {
            
            if(e.question_id === event.target.name){
               
                responses[i]['value'] = event.target.value;
                modified = true;
            }
        });
        if(!modified){
            responses.push({
                question_id:event.target.name,
                value : event.target.value
            });
        }
        this.setState({responses,errors:[]})
    }
    dispatcher = () => {
        
        let errors =  [];
   
        if(this.state.responses.length !== 10){
            errors.push('Please make sure you have answered all the questions.');
        }
        if(!this.state.email || !validateEmail(this.state.email)){
            errors.push('Please input a valid email address.')
        }
        this.setState({errors});
        
        if(errors.length>0){
            return false;
        }
        const {responses,email} = this.state;
        this.props.dispatcher({responses,email});
    }
    questions = () => {
        let ret: Array<any> = [];
        this.props.questions.map( (e,i) => {
            ret.push(this.createQuestionBox(e));
        } );

        return ret ;
    }

    inputEmail = (event:any) => {
        const email = event.target.value;
        
        this.setState({email,errors:[]});
        
        
    }

    render() {
        const questions = this.questions();
        
        
        return (
            <div className="main-container">
                {questions}
                <EmailInput
                inputEmail = {this.inputEmail}
                />
                <SaveAndContinue dispatcher = {this.dispatcher} 
                errors = {this.state.errors}
                />
                
            </div>
               
                            
                       
                       
                        
                 
          
          
        )
    }
}

const mapStateToProps = (state:any, ownProps:any) =>
{
    
    return ({
        questions: state.reducer.questions,
        

    })
};

const mapDispatchToProps = (dispatch:Function) => ({
    dispatcher: (data:any) => dispatch({type : types.SAVERESPONSES,email:data.email,responses:data.responses })
});
export default connect(mapStateToProps,mapDispatchToProps)(QuestionComponent);