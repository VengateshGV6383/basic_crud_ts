import React from 'react';
const InputBox = (props) => {
    const {field,onInputChange,errMsg,value}=props
    return ( 
        <div className="field">
                <label htmlFor={field.name} style={{fontSize:"1rem"}}>{field.text}</label>
                  <input style={{borderWidth:"2px"}} name={field.name}  value={value[`${field.name}`]} type={field.type} onChange={onInputChange} placeholder={field.placeholder} readOnly={false}/>
                
            {(errMsg && errMsg!==" ")&& <div className="ui pointing field red basic label">{errMsg}</div>}
        </div>
        
     );
}
 
export default InputBox;