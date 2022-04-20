import React,{useState, createContext } from "react";
import { Routes, Route} from "react-router-dom";
import Dashboard from './components/dashboard';
import Lists from './components/lists/lists';
import Login from './components/login';
import Package from './components/package';
import Register from './components/register';
import ForgotPassword from './components/forgot_password';

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState("");

  return (
      <UserContext.Provider value={{user,setUser}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/package" element={<Package />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
            {
                user ?
                <>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="lists" element={<Lists />} />
                </>
                :
                <Route path="/" element={<Login />} />
            }
        </Routes>
      </UserContext.Provider>
  );
}

export default App;
