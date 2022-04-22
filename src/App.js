import React,{useState, useEffect, createContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Lists from './pages/lists';
import Login from './pages/login';
import Package from './pages/package';
import Register from './pages/register';
import ForgotPassword from './pages/forgot_password';
import Dashboard from "./pages/dashboard";

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
