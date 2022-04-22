import React, { useState, useContext } from 'react';
import {UserContext} from "../App";
import { Link, useNavigate } from 'react-router-dom';
import InputComp from '../components/Input';
import "./../styles/login.css"

export default function Login() {
  const [formData, setFormData] = useState({email: '', password: ''})
  const [classNames, setClassNames]  = useState({email: '', password: ''})
  const [errors, setErrors]  = useState({email: '', password: ''})
  const navigate = useNavigate();

  const validate =(name,e)=>{
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i

    if(name === "email" && !emailValidation.test(e.target.value)){
      // console.log("validate",name,e);
      setClassNames(clas => {
         return {
            ...clas,
            [name]: 'invalid',
         }
      })
      setErrors(err => {
         return {
            ...err,
            [name]: `Enter valid email`,
         }
      })
    }
    if(name === "password" && !passwordValidation.test(e.target.value)){
      // console.log("validate",name,e);
      setClassNames(clas => {
         return {
            ...clas,
            [name]: 'invalid',
         }
      })
      setErrors(err => {
         return {
            ...err,
            [name]: `Enter valid password`,
         }
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
      setFormData({
         ...formData,
         [name]: value,
      })
      setErrors(err => {
         return {
            ...err,
            [name]: validate(name,e),
         }
      })
      if(!errors[name] && value){
        setClassNames(clas => {
         return {
            ...clas,
            [name]: 'valid',
         }
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.keys(formData).forEach(key => {
      // console.log(formData[key],errors[key],classNames[key])    
      if(formData[key] && !errors[key]){
        setClassNames(elemClass => {
          return {
              ...elemClass,
              [key]: 'valid',
          }
        })       
      }
      if(!formData[key]){
        setClassNames(elemClass => {
          return {
              ...elemClass,
              [key]: 'invalid',
          }
        })
        setErrors(err => {
          return {
              ...err,
              [key]: 'Required fild',
          }
        })
      }
    })

    // navigate to dashboard page
    let bool = false
    Object.keys(classNames).forEach(key => {
      if(formData[key] && !errors[key] && classNames[key]==="valid"){
        bool = true
      } else {
        bool = false
      }
    })
    bool && navigate("/dashboard")

  } 

  return (
    <div className="LoginWrapper">
      <h6>Login</h6>

      <form onSubmit={handleSubmit}>
        <InputComp className={ classNames?.email } type="text" name="email" placeholder="Email (Login)" onChange={handleChange} error={errors?.email}/>
        <InputComp className={ classNames?.password } type="password" name="password" placeholder="Password" onChange={handleChange} error={errors?.password}/>
      
        {/*forgot password link, go to /forgot_password page*/}
        <div className="forgotPass">
          <Link to="/forgot_password">Forgot password?</Link>
        </div>

        {/* registration link and login button */}
        <div className="loginLinks">
          <Link className="registerLink" to="/package">Register</Link>
          <input className="LoginSubmit" type="submit" value="Login" />
        </div>
      </form>
    </div>
  )
}
