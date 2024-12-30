import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import UserList from "../components/UserList";

const UserManagement = () => {
  const { state } = useLocation();
  const username = state?.username || "Usuário"; // Pega o nome do usuário

  return (
    <div className="user-management">
      <div className="main-content">
        <Header username={username} />
        <UserList />
      </div>
    </div>
  );
};

export default UserManagement;
