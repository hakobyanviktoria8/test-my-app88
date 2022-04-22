import React,{useState, useEffect, createContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from './components/dashboard';
import Lists from './components/lists/lists';
import Login from './components/login';
import Package from './components/package';
import Register from './components/register';
import ForgotPassword from './components/forgot_password';

export const UserContext = createContext(null)

function App() {
    let navigate = useNavigate();
    const [user, setUser] = useState("");

    //if user not defined redirect login page
    // useEffect(() => {
    //     if (!user) {
    //         navigate('/');
    //     }
    // },[]);

  return (
      <UserContext.Provider value={{user,setUser}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/package" element={<Package />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lists" element={<Lists />} />
        </Routes>
      </UserContext.Provider>
  );
}

export default App;
