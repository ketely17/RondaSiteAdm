import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import UserManagement from "./pages/UserManagement";
import CreateLocal from "./pages/CreateLocal"; 
import RotaCreate from "./pages/RotaCreate";
import Registros from "./pages/Registros";

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/create-local" element={<CreateLocal />} />
            <Route path="/create-rota" element={<RotaCreate />} />
            <Route path="/registros" element={<Registros />} />
          </Routes>
    </Router>
  );
}

export default App;
