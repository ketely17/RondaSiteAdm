import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../styles/FormLocal.css";
import logotijuca from "../assets/images/logotijuca.png";
import axios from "axios";

const FormLocal = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    nomeLocal: '',
    idLocal: null,
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.9.247:9010/local/create", formData);
      if (response.status === 200 || response.data) {
        setMessage("Local criado com sucesso!");
        onSubmit(formData);
        setFormData({ nomeLocal: '', idLocal: null });
      } else {
        setMessage("Erro ao criar o local. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao criar o local:", error);
      setMessage("Erro ao criar o local. Tente novamente.");
    }
  };

  return (
    <div className="formei-box">
      <img src={logotijuca} className="logotijuca" alt="Logo Tijuca" />
      <h1 className="h2-4">Adicione um local</h1>
      <form className="formei" onSubmit={handleSubmit}>
        <label className="loginn-texto">
          Nome do local
        </label>
        <div className="inputi-box">
        <FaMapMarkerAlt className="formei-icon" />
          <input
            type="text"
            name="nomeLocal"
            value={formData.nomeLocal}
            onChange={handleChange}
            className="formei-input"
          />
        </div>
        <button type="submit" className="formei-button">
          Criar
        </button>
      </form>
      {message && <p className="formei-message">{message}</p>}
    </div>
  );
};

export default FormLocal;
