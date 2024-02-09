import React from 'react'
import {useState} from 'react'
import {ToDoItem} from './TodoItem'

export const ToDoList = () => {
    //Text es el valor del input
    //setText es la funcion que actualiza el valor del text
    const [text, setText] = useState('');
    const [tareas, setTareas] = useState([]);

    const handlerChangeText = (e) =>{
        setText(e.target.value)
    }

    const handlerClickDelete = (index) => {
        const newTareas = tareas.filter((tarea,i) => i !== index);
        setTareas(newTareas)
    }

    const handlerOnClick = () => {
        //Se trae la informacion exisrtente de tareas y se le agrega el nuevo valor
        const newTareas = [...tareas, text];
        console.log(newTareas)
        setTareas(newTareas);
        setText('');
    }
    
  return (
    <React.Fragment>
        <h1>Lista de Tareas</h1>
        <input type="text" 
        placeholder='Ingresa una tarea'
        onChange={handlerChangeText}/>
        <button onClick={handlerOnClick}>Agregar</button>
        <h2 >{text}</h2>
        <ul>
            {tareas.map((tarea, index)=>(
                <ToDoItem
                    key = {index}
                    name = {tarea}
                    handlerClickDelete = {()=>handlerClickDelete(index)}
                />
            // <li>{tarea} 
            //     <button onClick={()=>handlerClickDelete(index)}>Eliminar</button>
            // </li>
            ))}
        </ul>
    </React.Fragment>
  )
}
