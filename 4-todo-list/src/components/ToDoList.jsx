import React from 'react'
import {useState} from 'react'

export const ToDoList = () => {
    //Text es el valor del input
    //setText es la funcion que actualiza el valor del text
    const [text, setText] = useState('');

    const handlerChangeText = (e) =>{
        console.log(e.target.value)
        setText(e.target.value)
    }

  return (
    <React.Fragment>
        <h1>Lista de Tareas</h1>
        <input type="text" 
        placeholder='Ingresa una tarea'
        onChange={handlerChangeText}/>
        <button>Agregar</button>
        <h2>{text}</h2>
    </React.Fragment>
  )
}
