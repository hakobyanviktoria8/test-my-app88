import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './components/dashboard';
import Lists from './components/lists';
import Login from './components/login';
import Package from './components/package';
import Register from './components/register';
import ForgotPassword from './components/forgot_password';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/package" element={<Package />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="lists" element={<Lists />} />
      </Routes>
    </div>
  );
}

export default App;
