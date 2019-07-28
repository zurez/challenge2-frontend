import React from 'react'


export const SaveAndContinue = (props:any) => {
    return(<div className="ui text container mrgn-tp eaual-spc center aligned form-container bdr-corner">
        <div className="ui form">

            <div className="ui form warning">

                <button className="ui submit button custom-button SCButton roboto"
                    onClick = { () => props.dispatcher()}
                >Save & Continue</button>
            </div>
        </div>
    </div>);
}