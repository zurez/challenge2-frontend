import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

interface Props{
    result:string,
    redirectStatus:string
}

const dimensions = [
    {
        title: ['Introversion (I)','Extraversion (E)'],
        letter: ['I','E']
    },
   
    {
        title: ['Sensing (S)','Intuition (N)'],
        letter: ['S','N']
    },
    
    {
        title: ['Thinking (T)','Feeling (F)'],
        letter: ['T','F']
    },
    
    {
        title: ['Judging (J)','Perceiving (P)'],
        letter: ['J','P']
    }
];

class ResultComponent extends Component<Props> {

    render_boxes = () => {

        const ret:Array<any> = [];
        const result = (this.props.result)?this.props.result.split(""):[];
        
        dimensions.map( (e,i) => {
            
            ret.push(
                <div className="ui grid" key={i}>
                    <div className="four wide column box-titles roboto">{e.title[0]}</div>
                    <div className={`four wide column align-box ${(result.indexOf(e.letter[0]) !== -1 )?'purple-bg':'grey-bg'}`}></div>
                    <div className={`four wide column  align-box ${(result.indexOf(e.letter[1]) !== -1 )?'purple-bg':'grey-bg'}`}></div>
                    <div className="four wide column box-titles roboto">{e.title[1]}</div>
                </div>
            
            );
        });
        return ret;

    }
    render() {
        if(this.props.redirectStatus !== "success"){
            return <Redirect to='/' />
        }
        const boxes = this.render_boxes();
        return (
            <div className="main-container">
                <div className="ui text bdr mrgn-tp eaual-spc center aligned bdr-corner">
                    <div className="ui form">

                        <div className="ui grid">
                            <div className="four wide column ui basic segment">
                                <div className="result-title roboto">Your Perspective</div>
                                <div className="result-subtitle roboto">Your Perspective Type is {this.props.result}</div>
                            </div>
                            <div className="eight wide column right floated">
                            {boxes}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:any, ownProps:any) => ({
    result : state.reducer.personalityType,
    redirectStatus : state.reducer.redirectStatus
})

export default connect(mapStateToProps,{})(ResultComponent);