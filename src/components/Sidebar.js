import React from "react";
import '../styles/Sidebar.css';
import { FaUserPlus, FaHome, FaRoute, FaBook, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem("dadosdeUsuario");  
    window.location.href = "/"; 
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <ul>
       
        <li>
          <Link to="/user-management">
            <FaUserPlus className="menuu-icon"/>
            <span>{isOpen && "Criar Usuário"}</span>
          </Link>
        </li>
        <li>
          <Link to="/create-local">
            <FaHome className="menuu-icon"/>
            <span>{isOpen && "Criar Local"}</span>
          </Link>
        </li>
        <li>
        <Link to="/create-rota">
          <FaRoute className="menuu-icon"/>
          <span>{isOpen && "Criar Rota"}</span>
          </Link>
        </li>
        <li>
        <Link to="/Registros">
          <FaBook className="menuu-icon"/>
          <span>{isOpen && "Consultar Registros"}</span>
          </Link>
        </li>
      </ul>
      <button className="logout-button" onClick={handleLogout}>
        <FaSignOutAlt />
        <span>{isOpen && "Sair"}</span>
      </button>
    </div>
  );
};

export default Sidebar;



