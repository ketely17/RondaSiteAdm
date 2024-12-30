import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../styles/FormLocal.css";
import logotijuca from "../assets/images/logotijuca.png";
import TimePicker from "./TimePicker";
import SelectGenerator from "./SelectGenerator"
import axios from "axios";

const FormRoute = ({ onSubmit, initialData, locais }) => {
  const [selectLocal, setSelectLocal] = useState([])
  const [formData, setFormData] = useState({
  })
  const [time, setTime] = useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post("http://192.168.9.247:9010/rota/create", formData);

      if (response.data.success) {
        console.log("Sucesso")
        // onSubmit(formData);
        // setFormData({ nomeLocal: '', idLocal: null });
      } else {
        
      }
    } catch (error) {
      console.error("Erro ao criar o local:", error);
    }
  };
  useEffect(()=>{
    console.log(time)
    console.log(selectLocal)
    setFormData({ ...formData, "idLocal": selectLocal})

  }, [selectLocal])
  useEffect(()=>{
        setFormData({...formData, "horarioInicio": time});
  },[time])


  

  return (
    <div className="formei-box">
      <img src={logotijuca} className="logotijuca" alt="Logo Tijuca" />
      <h1 className="h2-4">Adicione uma rota</h1>
      <form className="formei" onSubmit={handleSubmit}>
        <div className="inputi-box">
          <input
            type="text"
            name="nomeRota"
            value={formData.nomeRota}
            onChange={handleChange}
            className="formei-input"
            placeholder="Nome da Rota"
          />
            <TimePicker time={time} setTime={setTime}/>
            <SelectGenerator className="select-generator" list={locais} setAtualLocal={setSelectLocal}selectedArray={selectLocal}/>

        </div>
        <button type="submit" className="formei-button">
          Criar
        </button>
      </form>
      {/* {message && <p className="formei-message">{message}</p>} */}
    </div>
  );
};

export default FormRoute;
