import React, { useState } from 'react';
import "./../styles/input.css"
import "./../styles/forgotPassword.css"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [clas, setClas]  = useState("default")
  const [error, setError]  = useState("")

  const [sentEmail, setSentEmail] = useState(false)

  const handleChange = (e) => {
    setEmail(e.target.value)
    console.log("handleChange");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      // setRequire(true)
    }
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
        <div className={`input ${clas}`}>
          <input type="text" name="email" placeholder="Email (Login)" autoComplete="off" onChange={handleChange}/>
          <div>
              {clas==="invalid" && <span>x</span>}
              {clas==="valid" && <span className='val'>v</span>}
          </div>
        </div>
        <span>{error}</span>

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
