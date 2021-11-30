import React from 'react'
import { useLocalStorage } from './useLocalStorage'

const AppContext = React.createContext()

function AppProvider(props) {

  /* Setup */

  const defaultTasks = [
    {id: '1', text: 'Exercise', completed: false},
    {id: '2', text: 'Study React.js', completed: true},
    {id: '3', text: 'Walking the dog', completed: true},
    {id: '4', text: 'Shopping', completed: false}
  ]

  const {
    items: tasks,
    saveItems: saveTasks,
    loading, 
    error
  } = useLocalStorage('TASKS_V1', defaultTasks)
  

  /* Searchbar */
  const [search, setSearch] = React.useState('')
  let searchIconClass = 'fill-dark-soft'
  let searchedTasks = []
  if (!search.length >= 1) {
    searchedTasks = tasks
    searchIconClass = 'fill-dark-soft'
  } else {
    searchIconClass = 'fill-dark'
    searchedTasks = tasks.filter(task => {
      const taskText = task.text.toLowerCase()
      return taskText.includes(search.toLowerCase())
    })
  }
  let tasksAmount = tasks.length
  let completedTasksAmount = tasks.filter(task => task.completed).length

  /* Tasks */
  const onComplete = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id)
    const newTasks = [...tasks]
    if (newTasks[taskIndex].completed === true) {
      newTasks[taskIndex].completed = false
    } else {
      newTasks[taskIndex].completed = true
    }
    saveTasks(newTasks)
  }
  const onDelete = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id)
    const newTasks = [...tasks]
    newTasks.splice(taskIndex, 1)
    saveTasks(newTasks)
  }

  /* Add Tasks */
  const [openModal, setOpenModal] = React.useState(false)
  function newTask(text) {
    const id = parseInt(tasks[tasks.length - 1].id) + 1
    const obj = {
      id: id.toString(),
      text: text,
      completed: false
    }
    tasks.push(obj)
    saveTasks(tasks)
  }

  return (
    <AppContext.Provider value={{
      searchedTasks,
      searchIconClass,
      search, setSearch,
      tasksAmount,
      completedTasksAmount,
      onComplete,
      onDelete,
      openModal, setOpenModal,
      newTask,
      loading, 
      error
    }}>
      {props.children}
    </AppContext.Provider>
  )

}

export { AppContext, AppProvider }