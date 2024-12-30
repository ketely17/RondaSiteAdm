import React, { useState } from 'react'



export default function SelectGeneratorUser({list,setSelectedUser}) {
    const optionReturn = ()=>(list.map((item)=>(
        <option key={item.idLocal} id={item.idUsuario}>{item.nomedeUsuario}</option>
    )))
    const onChangeSet = (event)=>{
        const selectedOption = event.target.options[event.target.selectedIndex];
        const optionId = selectedOption.id;
        setSelectedUser(optionId)
    }
  return (
    <div className='selectDiv'>
        <select onChange={(event)=>{
            onChangeSet(event)
        }} className="select-generator">
        <option value="" disabled selected>
          Selecione o Usuário
        </option>
        {optionReturn()}
        </select>
    </div>
  )
}