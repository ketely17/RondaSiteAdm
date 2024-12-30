import React, { useState, useEffe, useEffect } from "react";
import Header from "../components/Header";
import TimePicker from "../components/TimePicker"; 
import SelectGeneratorUser from "../components/SelectGeneratorUsers";
import RouteSearch from "../components/RouteSearch"; 
import "../styles/Registros.css";
import axios from "axios";

export default function Registros() {
  const [result, setResult ] = useState([])
  const [formData, setFormData] = useState({

  })
  const[selectedUser, setSelectedUser] = useState()
  const[users, setUsers] = useState([])
  const loadUsersFromStorage = async () => {
    try {
      const response = await axios.get("http://192.168.9.247:9010/login/listUsers");
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  };

  useEffect(() => {
    loadUsersFromStorage();
  }, []);

   useEffect(()=>{
     
     setFormData({ ...formData, "idUsuario":selectedUser})
 
   }, [selectedUser])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loadRondaFromStorage = async () => {
    try {
      const response = await axios.get("http://192.168.9.247:9010/ronda/search");
      setResult(response.data);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  };
  
   useEffect(() => {
     loadRondaFromStorage();
    }, []);
  


  return (
    

    <div className="registros-container">
      <Header />
      
      <RouteSearch onSearch={() => {}} />
      <input
            type="text"
            name="nomeRota"
            value={formData.nomeRota}
            onChange={handleChange}
            className="formei-input"
          />
      {/* <TimePicker time={time} setTime={setTime}/> */}
      <input type="date" value={formData.data} name="data" onChange={handleChange}></input>
      <SelectGeneratorUser list={users} setSelectedUser={setSelectedUser} />
    </div>
  );
}

