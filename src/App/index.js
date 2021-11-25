import React from 'react'
import { Header } from '../Header'
import { SearchBar } from '../SearchBar'
import { TaskList } from '../TaskList'
import { Task } from '../Task'
import { NewTaskButton } from '../NewTaskButton'

import './style.css'

const tasks = [
  {id: '1', text: 'Exercise', completed: false},
  {id: '2', text: 'Study React.js', completed: true},
  {id: '3', text: 'Walking the dog', completed: true},
  {id: '4', text: 'Shopping', completed: false},
  {id: '4', text: 'Shopping', completed: false},
  {id: '4', text: 'Shopping', completed: false},
  {id: '4', text: 'Shopping', completed: false},
  {id: '4', text: 'Shopping', completed: false},
  {id: '4', text: 'Shopping', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <span className="divider"></span>
      <TaskList>
        {tasks.map(task => (
          <Task />
        ))}
      </TaskList>
      <NewTaskButton />
    </React.Fragment>
  )
}

export default App