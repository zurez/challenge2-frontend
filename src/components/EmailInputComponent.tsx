import React from 'react'

export const EmailInput = (props:any) => {
    return(
    <div 
    className="ui text container bdr mrgn-tp eaual-spc center aligned form-container bdr-corner">
    <div className="ui form">
        <span className="questionTitle">Your Email</span>
        <div className="ui form warning">
            <div className="field mrgn-tp20">

                <input type="email" placeholder="you@example.com" className="emailInput"/>
            </div>

        </div>
    </div>
    </div>

);
}