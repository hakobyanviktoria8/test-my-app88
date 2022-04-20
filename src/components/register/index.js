import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import InputComp from '../Input';
import "./register.css"

export default function Register() {
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
  const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
  const countryPhoneCode={
    "Select":"Select",
    "Afghanistan": "+93",
    "Albania": "+355",
    "Armenia": "+374",
  }
  const [formData, setFormData] = useState({
    name: "",
    selectCountry:"",
    selectCode: "",
    tel:"",
    email:"",
    password:"",
    confirmPassword:"",
    agreeCheckbox:""
  })
  const [className, setClassName]  = useState({})
  const [errors,setErrors]= useState({})
 
  const handleChange = (e) => {
    if(e.target.value.length < 3 ){
      setErrors({
        ...errors,
        [e.target.name] : "Min length is 3"
      })
    }  else if(e.target.name === "email" && !emailValidation.test(e.target.value)){
        setErrors({
          ...errors,
          [e.target.name] : "Please enter valid email"
        })
    } else if(e.target.name === "password" && !passwordValidation.test(e.target.value)){
        setErrors({
          ...errors,
          [e.target.name] :  "Min 8 characters, 1 letter, 1 number and 1 special character"
        })
    } else {
        setErrors("")
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
    setClassName(elemClass => {
      return {
         ...elemClass,
         [e.target.name]: 'default',
      }
   })
   Object.keys(formData).forEach(x=>{
    if(formData[x] && !errors[x]){
      setClassName(elemClass => {
        return {
           ...elemClass,
           [x]: 'valid',
        }
     })
    }
  })
};

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Register form data here ",formData);

    Object.keys(formData).forEach(x=>{
      if(formData[x]===""){
        setClassName(elemClass => {
          return {
             ...elemClass,
             [x]: 'invalid',
          }
       })
       setErrors(y=>{
         return {
           ...y,
           [x]: "Fild is require!"
         }
       })
      }
    })
  };
    console.log("className ",className);

  return (
    <div className="registerWrapper">
      <h6>Register</h6>

      <form onSubmit={handleSubmit}>
        <label>Company name *</label>
        <InputComp className={ className?.name } type="text" name="name" placeholder="Company name" onChange={handleChange} error={errors?.name}/>

        <label>Country *</label>
        <div className='selectCountryWrapper'>
          <select name="selectCountry" onChange={handleChange} style={{ border: require && "1px solid red" }}>
            <option name="Select">Select Country</option>
            <option name="Afghanistan">Afghanistan</option>
            <option name="Albania">Albania</option>
            <option name="Armenia">Armenia</option>
          </select>
          <span>{errors?.selectCountry}</span>
        </div>
        
        <label>Tel *</label>
        <div className='selectCodeWrapper'>
          <select className="selectCode" name="selectCode" onChange={handleChange} unselectable="on" readOnly={true} disabled>
            <option name="SelectOption">{!formData.selectCountry ? "Select": countryPhoneCode[formData.selectCountry]}</option>
          </select>
          <InputComp className={ className?.tel } type="tel" name="tel" placeholder="Tel" onChange={handleChange} error={errors?.tel}/>
        </div>
        
        <label>Email (Login) *</label>
        <InputComp className={ className?.email } type="text" name="email" placeholder="Email (Login)" onChange={handleChange} error={errors?.email}/>

        <label>Password *</label> 
        <InputComp className={ className?.password } type="password" name="password" placeholder="Password" onChange={handleChange} error={errors?.password}/>
       
        <label>Confirm Password *</label>   
        <InputComp className={ className?.confirmPassword } type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} error={errors?.confirmPassword}/>
     
        <div className='agreeCheckboxWrapper'>
          <div className='agreeCheckbox'>
            <input type="checkbox" name="agreeCheckbox" onChange={handleChange}/>
            <span>By registering in Delivery Manager you agree with our
              <a rel="noopener noreferrer" href="https://ubicross.com/en/store/terms" target="_blank"> Terms &amp; Conditions </a> 
              and 
              <a rel="noopener noreferrer" href="https://ubicross.com/en/store/privacy" target="_blank"> Privacy Policy</a>
            </span>
          </div>
          <span>{errors?.agreeCheckbox}</span>
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
