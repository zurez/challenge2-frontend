import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RadioInput } from './RadioComponent';
import { SaveAndContinue } from './SaveAndContinueComponent';
import { EmailInput } from './EmailInputComponent';

interface Props{
    dispatcher : any,
    questions : Array<any>
}

class QuestionComponent extends Component<Props> {

    createRadios = (data:any) => {
        const ret = [
            
            <label className="disagree sideText">Disagree</label>
        ];
        for(let i = 0 ; i <7 ; i++){
            ret.push(
                <RadioInput name = {data.id} value ={i+1}/>
            );
        }
        ret.push(<label className="agree sideText">Agree</label>);
        return ret;
    }

    createQuestionBox = (data:any) => {
        const radios = this.createRadios(data);
        return(
            <div className="ui text container bdr mrgn-tp eaual-spc center aligned form-container bdr-corner">
                <div className="ui form">
                    <span className="questionTitle">{data.title}</span>
                    <div className="inline fields mrgn-tp20 sub-content">
                        {radios}
                    </div>
                </div>
            </div>
        );
    }

    questions = () => {
        let ret: Array<any> = [];
        this.props.questions.map( (e,i) => {
            ret.push(this.createQuestionBox(e));
        } );

        return ret ;
    }
    render() {
        const questions = this.questions();
        return (
            <div className="main-container">
                {questions}
                <EmailInput/>
                <SaveAndContinue dispatcher = {this.props.dispatcher} />
                
            </div>
               
                            
                       
                       
                        
                 
          
          
        )
    }
}

const mapStateToProps = (state:any, ownProps:any) => ({
        questions: state.reducer.questions,
});

const mapDispatchToProps = (dispatch:Function) => ({
    dispatcher: () => dispatch({type : "CLICK" , value : "lol"})
});
export default connect(mapStateToProps,mapDispatchToProps)(QuestionComponent);