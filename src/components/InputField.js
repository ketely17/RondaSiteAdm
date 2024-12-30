import React, { useState } from "react";
import { FiUser, FiLock } from "react-icons/fi";

const InputField = ({ type, value, onChange, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

 
  const icon = type === "cpf" ? <FiUser strokeWidth={1} /> : <FiLock strokeWidth={1} />;

  
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (value === "") {
      setIsFocused(false);
    }
  };

  return (
    <div className="input-conteiner">
      <div className="icon">{icon}</div>
      <input
        type={type === "password" ? "password" : "text"}
        placeholder={""}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
      />
      <label className={isFocused || value ? "active" : ""}>{placeholder}</label>
    </div>
  );
};

export default InputField;
