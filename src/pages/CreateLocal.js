import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import FormLocal from "../components/FormLocal";
import "../styles/CreateLocal.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const CreateLocal = () => {
  const [locais, setLocais] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Carrega locais da API
  const loadLocaisFromStorage = async () => {
    try {
      const response = await axios.get("http://192.168.9.247:9010/local/list");
      setLocais(response.data);
    } catch (error) {
      console.error("Erro ao carregar locais:", error);
    }
  };

  useEffect(() => {
    loadLocaisFromStorage();
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
        {locais.length === 0 ? (
          <p className="no-locais-text">Nenhum local adicionado ainda.</p>
        ) : (
          locais.map((local) => (
            <div key={local.id} className="local-card">
              <div className="card-info">
                <div className="info-item">
                  <h4>Nome do Local:</h4>
                  <p>{local.nomeLocal}</p>
                </div>
                <div className="info-item">
                  <h4>ID do Local:</h4>
                  <p>{local.idLocal}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal reutilizado */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <FormLocal />
      </Modal>
    </div>
  );
};

export default CreateLocal;