import React from "react";
import "../styles/SearchResultList.css";
import DropDownResult from "../components/DropDownResult";
export default function SearchResultList({ data, toggleDropDown, isDropdownOpen, dropData}) {
  





  return (
    <div className="SearchDIV">
      <ul className="ul-list">
        {data.map((data, index) => (
          <li key={index} className="item-row">
            <button
              onClick={()=>{toggleDropDown(data.idRonda)}}  
            
            
            >{`
              ${data.nomeRota} ( ${
              data.horaInicio ? data.horaInicio : "?"
            } - ${data.horaFim ? data.horaFim : "?"} )`}</button>
            <div className="dropdown">{data.idRonda == dropData &&(<DropDownResult/>)}</div>
          </li> 
          
        ))}
        
      </ul>
      
      
      
    </div>
  );
}
