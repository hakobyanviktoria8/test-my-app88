import React from 'react';
import "./input.css"

export default function InputComp({require, value, type, name, placeholder, message, onChange }) {
    return (
        <div className="inputComp">
            <div className="input" style={{ border: require && "1px solid red" }}>
                <input value={value} type={type} name={name} placeholder={placeholder} autoComplete="off" onChange={onChange} />
                <div>{require && <span>x</span>}</div>
            </div>
            <span>{require && message}</span>
        </div>
    );
}
