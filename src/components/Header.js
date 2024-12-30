import React, { useState } from "react";
import "../styles/Header.css";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import logotijuca from "../assets/images/logotijuca.png";

const Header = ({ username }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header">
        <div className="menu-logo-container">
          <button onClick={toggleSidebar} className="menu-icon">
            <FaBars />
          </button>
          <div className="logo-container">
            <img src={logotijuca} alt="Logo" className="logo" />
            <h1>Tijuca</h1> 
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} />
    </>
  );
};

export default Header;
