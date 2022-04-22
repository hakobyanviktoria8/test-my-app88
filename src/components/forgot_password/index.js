import React, { useState, useEffect } from 'react';
import "./forgotPassword.css"
import InputComp from '../Input';
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [clas, setClas]  = useState("default")
  const [error, setError]  = useState("")

  const [sentEmail, setSentEmail] = useState(false)

  const handleChange = (e) => {
    // setEmail(e.target.value)
    console.log("handleChange");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!email) {
    //   setRequire(true)
    // }
    // if (email && !require) {
    //   setSentEmail(true)
    // }
    // console.log("Forgot Password data is ", email);
    // setEmail("")
  }

  // useEffect(() => {
  //   console.log("render");
  // }, [require])

  return (
    <div className="forgotPasswordWrapper">
      <h6>Forgot password</h6>

      <form onSubmit={handleSubmit}>
        <label>Email*</label>
        <InputComp className={ clas } type="text" name="email" placeholder="Email (Login)" onChange={handleChange} error={error}/>

        {/* ForgotPassword button and login link*/}
        <div className="forgotPasswordLinks">
          <input className="forgetPassSubmit" type="submit" value="Send" />
          <Link className="loginLink" to="/login">Login</Link>
        </div>
      </form>
      {sentEmail && <h5>Please check your email!</h5>}
    </div>
  );
}
