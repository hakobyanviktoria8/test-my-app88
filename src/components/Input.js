import React from 'react';
import "./../styles/input.css"

export default function InputComp({className="default", type, name, placeholder, onChange, error}) {
    return (
        <div className="inputComp">
            <div className={`input ${className}`}>
                <input type={type} name={name} placeholder={placeholder} autoComplete="off" onChange={onChange}/>
                <div>
                    {className==="invalid" && <span>x</span>}
                    {className==="valid" && <span className='val'>v</span>}
                </div>
            </div>
            <span>{error}</span>
        </div>
    );
}
