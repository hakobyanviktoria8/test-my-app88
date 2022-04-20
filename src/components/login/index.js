import React, { useState, useContext } from 'react';
import {UserContext} from "../../App";
import { Link } from 'react-router-dom';
import InputComp from '../Input';
import "./login.css"
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [require, setRequire] = useState(false)
  const {user, setUser} = useContext(UserContext);

  const handleChangeEmail = (e) => {
    let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    if(emailformat.test(e.target.value)){
      console.log("valid email")
      setUser(e.target.value)
    }
    setEmail(e.target.value)
    setRequire(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setRequire(true)
    }
    console.log("Login data here ", email, password);
    setEmail("")
    setPassword("")
    console.log("User ",user)

    // authData && window.location.replace("/dashboard")
  }
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="LoginWrapper">
      <h6>Login</h6>

      <form onSubmit={handleSubmit}>
        <InputComp require={require} value={email} type="text" name="email" placeholder="Username or Email" message="Please input Username or Email!" onChange={handleChangeEmail} />
        <InputComp require={require} value={password} type="password" name="password" placeholder="Password" message="Please input password!" onChange={(e) => setPassword(e.target.value)} />

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
