import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import FormLocal from "../components/FormLocal";
import "../styles/CreateLocal.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import userPrint from "../hooks/userPrint";
import style from "../styles/localsStyle"
import PrintLocal from "../components/PrintLocal";

const CreateLocal = () => {
  const [locais, setLocais] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const print = async (idLocal) => {
    //Variavel que recebe o retorno do Hook passando o componente junto com ID para geração do QRCode  
    const content = await userPrint(<PrintLocal idLocal={idLocal}/>);
    //Cria a janela de impressâo
    const windows = window.open();
    //Cria no documento estrutura basica de funcionamento HTML para impressao
    await windows.document.write(`
        <html>
            <head>
                <title>PRINT TEST</title>
                 <style>${style}</style>
            </head>
            `);
    //Define o corpo do arquivo
    await windows.document.write(`<body>${content}</body>`);
    //Define o fechamento da estrutura HTML para impressao
    await windows.document.write("</html>");




    windows.print()
    //Chama a ação de print da pagina
    
  };







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
                <div>
                  
                  <button onClick={()=>{
                    print(local.idLocal)
                  }}>
                    Gerar QrCode
                  
                  
                  </button></div>
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