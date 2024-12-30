import React, { useState } from 'react'


export default function SelectGenerator({list,setAtualLocal, selectedArray}) {
    const [local, setLocal] = useState()
    const optionReturn = ()=>(list.map((item)=>(
        <option key={item.idLocal} id={item.idLocal}>{item.nomeLocal}</option>
    )))
    const onChangeSet = (event)=>{
        const index = event.target.options.selectedIndex
        const opcao = event.target.options[index].getAttribute('id')
        console.log(opcao)
        setLocal(opcao)
    }
    const onClickAction = () =>{
        setAtualLocal([...selectedArray, local])
        // setLocal()
    }
  return (
    <div>
        <select onChange={(event)=>{
            onChangeSet(event)
        }} >
        <option value="" disabled selected>
          Selecione os locais
        </option>
        {optionReturn()}
        </select>
        <button onClick={()=>{
            onClickAction()
        }} type='button'>+</button>
    </div>
  )
}