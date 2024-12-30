import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import Modal from "./Modal";
import Form from "./Form";
import SearchBar from "./SearchBar";
import axios from "axios";
import "../styles/UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  
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

  // Abrir modal
  const handleOpenModal = (index = null) => {
    setEditingUser(index);
    setIsModalOpen(true);
  };

  // Fechar modal
  const handleCloseModal = () => {
    setEditingUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="user-list">
      <SearchBar onOpenModal={() => handleOpenModal()} />
      <div className="user-cards-container">
        {users.length === 0 ? (
          <p className="no-users-text">Nenhum usuário adicionado ainda.</p>
        ) : (
          users.map((user, index) => (
            <div key={index} className="user-card">
              <div className="card-info">
                <div className="info-item">
                  <h4>Cargo:</h4>
                  <p>{user.permissao}</p>
                </div>
                <div className="info-item">
                  <h4>Nome:</h4>
                  <p>{user.nomedeUsuario}</p>
                </div>
                <div className="info-item">
                  <h4>CPF:</h4>
                  <p>{user.cpf}</p>
                </div>
                <div className="info-item">
                  <h4>Status:</h4>
                  <p>{user.status}</p>
                </div>
              </div>
              <div className="actions">
                <FiEdit
                  className="edit-icon"
                  onClick={() => handleOpenModal(index)}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal com formulário */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <Form
            onSubmit={(updatedData) => {
              console.log("Atualizar dados do usuário:", updatedData);
              handleCloseModal();
            }}
            initialData={editingUser !== null ? users[editingUser] : null}
          />
        </Modal>
      )}
    </div>
  );
};

export default UserList;
