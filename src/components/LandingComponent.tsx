import React, { Component } from 'react'
import QuestionComponent from './SingleQuestionComponent';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

interface Props{
    onSaveResponseStatus : string
}

class LandingComponent extends Component<Props> {
    render() {
        if(this.props.onSaveResponseStatus === "success"){
            return <Redirect to='/result' />
        }
        return (
            <span>
                <div className="landingTitle roboto container title">
                    Discover Your Perspective
                </div>
                <div className="roboto landingSubTitle title">
                Complete the 7 min test and get a detailed report of your lenses on the world.
                </div>
                <QuestionComponent />
            </span>
           
        )
    }
}

const mapStateToProps = (state:any, ownProps:any) => ({
    onSaveResponseStatus: state.reducer.redirectStatus
})

export default connect(mapStateToProps,{})(LandingComponent);
