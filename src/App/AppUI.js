import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { Header } from '../Header'
import { SearchBar } from '../SearchBar'
import { TaskList } from '../TaskList'
import { Task } from '../Task'
import { NewTaskButton } from '../NewTaskButton'

import './style.css'

function AppUI() {
  const { tasks } = useContext(AppContext)

  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <span className="divider"></span>
      <TaskList>
        {tasks.map(task => (
          <Task 
            key={task.id}
            text={task.text}
            completed={task.completed}
          />
        ))}
      </TaskList>
      <NewTaskButton />
    </React.Fragment>
  )
}

export { AppUI }