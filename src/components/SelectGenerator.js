import React, { useState } from 'react';
import '../styles/SelectGeneratorLocal.css';

export default function SelectGenerator({ list, setAtualLocal, selectedArray }) {
  const [local, setLocal] = useState();

  const optionReturn = () =>
    list.map((item) => (
      <option key={item.idLocal} id={item.idLocal}>
        {item.nomeLocal}
      </option>
    ));

  const onChangeSet = (event) => {
    const index = event.target.options.selectedIndex;
    const opcao = event.target.options[index].getAttribute('id');
    console.log(opcao);
    setLocal(opcao);
  };

  const onClickAction = () => {
    setAtualLocal([...selectedArray, local]);
  };

  return (
    <div className="selecte-box">
      <select onChange={(event) => onChangeSet(event)} defaultValue="">
        <option value="" disabled>
          Selecione os locais
        </option>
        {optionReturn()}
      </select>
      <button
        className="foremei-button"
        onClick={() => onClickAction()}
        type="button"
      >
        +
      </button>
    </div>
  );
}