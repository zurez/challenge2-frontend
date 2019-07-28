import React, { Component } from 'react'
import QuestionComponent from './SingleQuestionComponent';
export default class LandingComponent extends Component {
    render() {
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
