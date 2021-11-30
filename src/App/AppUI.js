import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { Header } from '../Header'
import { SearchBar } from '../SearchBar'
import { TasksList, TasksListError } from '../TaskList'
import { Task } from '../Task'
import { NewTaskButton } from '../NewTaskButton'
import { Modal } from '../Modal'
import { Form } from '../Form'

import './style.css'

function AppUI() {
  const { 
    error,
    searchedTasks, 
    onComplete, 
    onDelete,
    openModal,
    setOpenModal
  } = useContext(AppContext)

  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <span className="divider"></span>
      <TasksList>
        {error && <TasksListError />}
        {searchedTasks.map(task => (
          <Task 
            key={task.id}
            text={task.text}
            completed={task.completed}
            onComplete={() => onComplete(task.id)}
            onDelete={() => onDelete(task.id)}
          />
        ))}
      </TasksList>
      <NewTaskButton setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
          <Form />
        </Modal>
      )}
    </React.Fragment>
  )
}

export { AppUI }