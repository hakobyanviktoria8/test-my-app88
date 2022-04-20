import React, {useState} from 'react';
import "./input.css"

export default function InputComp({require, value, type, name, placeholder, message, onChange }) {
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
    const [error,setError]= useState("")

    const handleKeyDown = (e) =>{
        if(e.target.value.length < 3 ){
            setError("Min length is 3")
        }  else if(name === "email" && !emailValidation.test(e.target.value)){
            setError("Please enter valid email")
        } else if(name === "password" && !passwordValidation.test(e.target.value)){
            setError("Min 8 characters, 1 letter, 1 number and 1 special character")
        } else {
            setError("")
        }
    }

    return (
        <div className="inputComp">
            <div className="input" style={{ border: require && "1px solid red" }}>
                <input value={value} type={type} name={name} placeholder={placeholder} autoComplete="off" onChange={onChange} onKeyDown={handleKeyDown}/>
                <div>{require && <span>x</span>}</div>
            </div>
            <span>{message || error}</span>
        </div>
    );
}
