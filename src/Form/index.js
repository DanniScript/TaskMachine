import React from 'react'
import { AppContext } from '../AppContext'

import './style.css'

function Form() {
  const { setOpenModal } = React.useContext(AppContext)
  return (
    <form className="add-task-form sub-container">
      <label>Add Task</label>
      <input placeholder="Task" />
      <spam className="divider"></spam>
      <div className="add-task-form__buttons">
        <button type="button" onClick={() => setOpenModal(false)}>Cancel</button>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export { Form }