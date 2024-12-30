import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import "../styles/Login.css";
import "../styles/InputField.css";
import Team from "../assets/images/Team.jpg";

const Login = () => {
  const [ success, setSuccess] = useState()
  const navigate = useNavigate();




  useEffect(()=>{


    if(success){
     navigate("/user-management")
    }



  },[success])

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={Team} alt="Equipe de segurança" />
      </div>

      <LoginForm onLoginSuccess={setSuccess} />
    </div>
  );
};

export default Login;

