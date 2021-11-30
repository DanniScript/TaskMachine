import React from 'react'
import { AppContext } from '../AppContext'

import './style.css'

function Form() {
  const { setOpenModal, newTask } = React.useContext(AppContext)
  const [newTaskText, setNewTaskText] = React.useState('')
  const onSubmit = (ev) => {
    ev.preventDefault()
    newTask(newTaskText)
    setOpenModal(false)
  }
  return (
    <form className="add-task-form sub-container" onSubmit={onSubmit}>
      <label>Add Task</label>
      <input 
        value={newTaskText}
        onChange={ev => setNewTaskText(ev.target.value)}
        placeholder="Task" 
      />
      <span className="divider"></span>
      <div className="add-task-form__buttons">
        <button type="button" onClick={() => setOpenModal(false)}>Cancel</button>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export { Form }