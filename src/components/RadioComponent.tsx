import React from 'react'


export const RadioInput = ( props:any ) => {
    return(
        <div className="field">
            <div className="ui radio checkbox">
               <input type="radio" name={`${props.name}`} tabIndex={0}
                onChange={props.onRadioChange}
                value={props.value}
               />
               <label>&nbsp;</label>
            </div>
         </div>
    );
}