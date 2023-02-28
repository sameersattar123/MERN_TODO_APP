import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../redux/Actions'

const TodoForm = () => {

    const dispatch = useDispatch()

    const [text , setText] = useState("")

    const onInputChange = (e) => {
        setText(e.target.value)
    }

    const onSubmitClick = (e) =>{
        e.preventDefault();
        dispatch(addNewTodo(text))
        setText("")
    }
  return (
    <>
        <form action="" className="form"  onSubmit={onSubmitClick} >
            <input placeholder='Enter the Todo' value={text} onChange={onInputChange} className="input" />
        </form>
    </>
  )
}

export default TodoForm