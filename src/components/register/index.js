import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import InputComp from '../Input';
import "./register.css"

export default function Register() {
  const [formData, setFormData] = useState({})
  const [require, setRequire] = useState(false)
  const countryPhoneCode={
    "Select":"Select",
    "Afghanistan": "+93",
    "Albania": "+355",
    "Armenia": "+374",
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
    setRequire(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setRequire(true)
    console.log("Register form data here ",formData);
  };
  
  return (
    <div className="registerWrapper">
      <h6>Register</h6>

      <form onSubmit={handleSubmit}>
        <label>Company name *</label>
        <InputComp require={require} type="name" name="name" placeholder="Company name" message="Please input Company name!" onChange={handleChange} />

        <label>Country *</label>
        <div className='selectCountryWrapper'>
          <select name="selectCountry" onChange={handleChange} style={{ border: require && "1px solid red" }}>
            <option name="Select">Select Country</option>
            <option name="Afghanistan">Afghanistan</option>
            <option name="Albania">Albania</option>
            <option name="Armenia">Armenia</option>
          </select>
          <span>{require && "Please select Country!"}</span>
        </div>
        
        <label>Tel *</label>
        <div className='selectCodeWrapper'>
          <select className="selectCode" name="selectCode" onChange={handleChange} unselectable="on" readOnly={true} disabled>
            <option name="SelectOption">{!formData.selectCountry ? "Select": countryPhoneCode[formData.selectCountry]}</option>
          </select>
          <InputComp require={require} type="tel" name="tel" placeholder="Tel" message="Please input your phone number!" onChange={handleChange} />
        </div>
        
        <label>Email (Login) *</label>
        <InputComp require={require} type="text" name="email" placeholder="Email (Login)" message="Please input email!" onChange={handleChange} />

        <label>Password *</label>        
        <InputComp require={require} type="password" name="password" placeholder="Password" message="Please input password!" onChange={handleChange} />

        <label>Confirm Password *</label>        
        <InputComp require={require} type="password" name="password" placeholder="Password" message="Please confirm your password!" onChange={handleChange} />

        <div className='agreeCheckboxWrapper'>
          <div className='agreeCheckbox'>
            <input type="checkbox" name="agreeCheckbox" onChange={handleChange}/>
            <span>By registering in Delivery Manager you agree with our
              <a rel="noopener noreferrer" href="https://ubicross.com/en/store/terms" target="_blank"> Terms &amp; Conditions </a> 
              and 
              <a rel="noopener noreferrer" href="https://ubicross.com/en/store/privacy" target="_blank"> Privacy Policy</a>
            </span>
          </div>
          <span>{require && "Please read and confirm Terms and Privacy!"}</span>
        </div>

        {/* registration link and login button */}
        <div className="registerLinks">
          <Link className="loginLink" to="/login">Login</Link>
          <input className="registerSubmit" type="submit" value="Register"/>
        </div>

      </form>
    </div>
  );
}
