import React from 'react'
import { Message } from 'semantic-ui-react';

export const SaveAndContinue = (props:any) => {
    return(<div className="ui text container mrgn-tp eaual-spc center aligned form-container bdr-corner">
        <div className="ui form">

            <div className="ui form warning">
                {(props.errors && props.errors.length>0)?
                    <Message 
                        negative
                        header = "Errors"
                        list = {props.errors.map((e:string,i:number) => <li key={i}>{e}</li>)}
                    />
                :null}
            
                <br/>
                <button className="ui submit button custom-button SCButton roboto"
                    onClick = { () => props.dispatcher()}
                >Save & Continue</button>
            </div>
        </div>
    </div>);
}