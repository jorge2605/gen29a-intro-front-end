const TodoItem = (props) => {
  return (
    <li>
        {props.name}
        <button onClick={props.handlerClickDelete}>Eliminar</button>
    </li>
  )
}

export default TodoItem