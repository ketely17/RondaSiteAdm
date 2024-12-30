import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import FormRoute from "../components/FormRoute";
import "../styles/CreateLocal.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";



const RotaCreate = () => {
  const [Rota, setRota] = useState([]);
  const [locais, setLocais] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);


    const loadLocaisFromStorage = async () => {
      try {
        const response = await axios.get("http://192.168.9.247:9010/local/list");
        console.log("Estou sendo executado")
        setLocais(response.data);
      } catch (error) {
        console.error("Erro ao carregar locais:", error);
      }
    };

  const loadRotasFromStorage = async () => {
    try {
      const response = await axios.get("http://192.168.9.247:9010/rota/list");
      setRota(response.data);
    } catch (error) {
      console.error("Erro ao carregar rotas:", error);
    }
  };

  useEffect(() => {
    loadRotasFromStorage();
    loadLocaisFromStorage();
    console.log(Rota)
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="create-local-page">
      <Header />
      <SearchBar onOpenModal={handleOpenModal} />
      <div className="local-cards-container">
        {Rota.length === 0 ? (
          <p className="no-locais-text">Nenhuma rota adicionado ainda.</p>
        ) : (
          Rota.map((rota) => (
            <div key={rota.horario} className="local-card">
              <div className="card-info">
                <div className="info-item">
                  <h4>Rota:</h4>
                  <p>{rota.nomeRota}</p>
                </div>
                <div className="info-item">
                  <h4>horario:</h4>
                  <p>{rota.horarioInicio}</p>
                </div>
              </div>
            </div>
          ))
        )}

      </div>

      
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <FormRoute locais={locais}/>
      </Modal>
    </div>
  );
};

export default RotaCreate;