import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux'

interface Props{
    dispatcher : any,
    questions : Array<any>
}

class SingleQuestionComponent extends Component<Props> {

    createRadios = () => {
        const ret = [
            
            <span className={"disagree"} key = {80}>Disagree</span>
        ];
        for(let i = 0 ; i <7 ; i++){
            ret.push(
                <input type="radio"  className="radio" name="test" key={i} />
            );
        }
        ret.push(<span className={ "agree" } key = {8}>Agree</span>);
        return ret;
    }
    render() {
        const radios = this.createRadios();
        return (
            <Grid centered>
                <Grid.Column className={"questionBox"}>
                    <Grid.Row className={"questionTitle"}>
                        You consider yourself more practical than creative.
                    </Grid.Row>
                    <Grid.Row className={"radioBox"}>
                        <div style={{textAlign:"center"}}>
                        {radios}
                        </div>
                       
                        
                    </Grid.Row>
                    <Grid.Row>
                        <button onClick={this.props.dispatcher} />
                    </Grid.Row>
                </Grid.Column>
                
            </Grid>
        )
    }
}

const mapStateToProps = (state:any, ownProps:any) => ({
        questions: state.reducer.questions,
});

const mapDispatchToProps = (dispatch:Function) => ({
    dispatcher: () => dispatch({type : "CLICK" , value : "lol"})
});
export default connect(mapStateToProps,mapDispatchToProps)(SingleQuestionComponent);