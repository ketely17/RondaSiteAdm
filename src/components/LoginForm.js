import React, { useState } from "react";
import InputField from "./InputField";
import Logo from "./Logo";
import "../styles/LoginForm.css";
import User from "../controllers/Usercontroller";

const LoginForm = ({ onLoginSuccess }) => {
  const [cpf, setCpf] = useState(""); 
  const [senhadeUsuario, setSenhadeUsuario] = useState("");  
  const [message, setMessage] = useState(""); 
  const [loginSuccessful, setLoginSuccessful] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userService = new User();
    const success = await userService.UserLogin(cpf, senhadeUsuario);  

    if (success === true) {
      setMessage("Login realizado com sucesso!");  
      setLoginSuccessful(true);  
      onLoginSuccess(true);  
    } else {
      setMessage("Credenciais inválidas. Tente novamente.");  
      setLoginSuccessful(false);  
    }
  };

  return (
    <div className="login-box">
      <Logo />
      <h2 className="h2-2">Bem-vindo</h2>
      <p className="login-text">ENTRE COM SUA CONTA</p>
      <p className={`feedback-message ${loginSuccessful ? 'success' : ''}`}>{message}</p>
      
      <form className="form" onSubmit={handleSubmit}>
        <InputField
          type="cpf" 
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="CPF"
        />
        <InputField
          type="password"
          value={senhadeUsuario}  
          onChange={(e) => setSenhadeUsuario(e.target.value)}  
          placeholder="Senha"
        />
        <button type="submit">Entrar</button>
      </form>

    
    </div>
  );
};

export default LoginForm;
