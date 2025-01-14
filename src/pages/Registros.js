import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SelectGeneratorUser from "../components/SelectGeneratorUsers";
import "../styles/Registros.css";
import axios from "axios";
import SearchResultList from "../components/SearchResultList";
// import DropDownResult from "../components/DropDownResult";

export default function Registros() {
  const [result, setResult] = useState([]);
  const [formData, setFormData] = useState({
    nomeRota: "",
    data: "",
    idUsuario: null,
  });
  const [selectedUser, setSelectedUser] = useState();
  const [users, setUsers] = useState([]);
  // const [expandedCategory, setExpandedCategory] = useState(null);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [dropData, setDropData] = useState(0);

  // const toggleDropDown = (idRonda) => {
  //   isDropdownOpen ? setDropData(idRonda) : setDropData(0);
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  const loadUsersFromStorage = async () => {
    try {
      const response = await axios.get(
        "http://192.168.9.247:9010/login/listUsers"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  };

  useEffect(() => {
    loadUsersFromStorage();
  }, []);

  useEffect(() => {
    setFormData({ ...formData, idUsuario: selectedUser });
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loadRondaFromStorage = async () => {
    try {
      const response = await axios.post(
        "http://192.168.9.247:9010/ronda/search",
        formData
      );
      setResult(response.data);
    } catch (error) {
      console.error("Erro ao carregar rondas:", error);
    }
  };

  const handleSearch = () => {
    loadRondaFromStorage();
    // setExpandedCategory(formData.nomeRota); // Expandir automaticamente a categoria pesquisada
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // const toggleCategory = (category) => {
  //   setExpandedCategory(expandedCategory === category ? null : category);
  // };

  const groupedResults = result.reduce((groups, ronda) => {
    const category = ronda.nomeRota;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(ronda);
    return groups;
  }, {});

  return (
    <div>
      <Header />
      <div className="registros-container">
        <div className="filters-container">
          <input
            type="text"
            name="nomeRota"
            value={formData.nomeRota}
            onChange={handleChange}
            className="formeie-input"
            placeholder="Nome da Rota"
            onKeyDown={handleKeyPress}
          />

          <input
            className="data"
            type="date"
            value={formData.data}
            name="data"
            onChange={handleChange}
          />

          <SelectGeneratorUser list={users} setSelectedUser={setSelectedUser} />

          <button className="search-button" onClick={handleSearch}>
            Pesquisar
          </button>
        </div>
        <div>
          <SearchResultList
            data={result}
            // toggleDropDown={toggleDropDown}
            // // isDropdownOpen={isDropdownOpen}
            // dropData={dropData}
          />
        </div>
      </div>
    </div>
  );
}
