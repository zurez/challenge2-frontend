import React, { Component } from 'react'
import { Grid,Radio } from 'semantic-ui-react';


export default class SingleQuestionComponent extends Component {

    createRadios = () => {
        const ret = [
            
            <span className={"disagree"}>Disagree</span>
        ];
        for(let i = 0 ; i <7 ; i++){
            ret.push(
                <input type="radio"  className="radio" name="test"/>
            );
        }
        ret.push(<span className={ "agree" }>Agree</span>);
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
                </Grid.Column>
              
            </Grid>
        )
    }
}
