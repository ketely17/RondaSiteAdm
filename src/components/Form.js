import React, { useState, useEffect } from 'react';
import { FaUser, FaIdCard, FaLock } from 'react-icons/fa';
import '../styles/Form.css'; 
import logotijuca from '../assets/images/logotijuca.png';
import axios from 'axios'; 

const Form = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    nomedeUsuario: '', 
    cpf: '',
    senhadeUsuario: '', 
    permissao: 'Administrador', 
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData); 
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
    console.log(setFormData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://192.168.9.247:9010/login/create", formData);
      console.log("Resposta do servidor:", response.data);
    
      onSubmit(formData);
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário. Tente novamente.");
    }
  };

  return (
    <div className="forme-box">
      <img src={logotijuca} alt="Logo Tijuca" className="logotijuca" />
      <h2 className="h2-3">{initialData ? 'Editar Usuário' : 'Adicionar Usuário'}</h2>
      <p className="login-texto">Preencha os dados abaixo:</p>
      <form className="forme" onSubmit={handleSubmit}>
        <div className="input-box">
          {formData.nome && (
            <div className="status-indicator"></div>
          )}
          <FaUser  className='image'/>
          <input
            type="text"
            name="nomedeUsuario" 
            value={formData.nomedeUsuario} 
            onChange={handleChange}
            placeholder=" "
            className="forme-input"
            required
          />
          <label className="forme-label">Nome</label>
        </div>
        <div className="input-box">
          <FaIdCard className='image'/>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder=" "
            
            required
          />
          <label className="forme-label">CPF</label>
        </div>
        <div className="input-box">
          <FaLock className='image'/>
          <input
            type="password"
            name="senhadeUsuario" 
            value={formData.senhadeUsuario} 
            onChange={handleChange}
            placeholder=" "
            
            required
          />
          <label className="forme-label">Senha</label>
        </div>

        <div className="select-box">
          <div className="input-box">
            <select
              name="permissao" 
              value={formData.permissao} 
              onChange={handleChange}
              className="forme-input"
              required
            >
              <option value="Administrador">Administrador</option>
              <option value="Vigia">Vigia</option>
            </select>
            <label className="forme-label">Cargo</label>
          </div>
        </div>

        <button type="submit" className="forme-button">
          {initialData ? 'Atualizar' : 'Adicionar'}
        </button>
      </form>
    </div>
  );
};

export default Form;
