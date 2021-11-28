import React from 'react'

const AppContext = React.createContext()

function AppProvider(props) {

  /* Setup */
  const [tasks, setTasks] = React.useState([
    {id: '1', text: 'Exercise', completed: false},
    {id: '2', text: 'Study React.js', completed: true},
    {id: '3', text: 'Walking the dog', completed: true},
    {id: '4', text: 'Shopping', completed: false}
  ]) 

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
    setTasks(newTasks)
  }
  const onDelete = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id)
    const newTasks = [...tasks]
    newTasks.splice(taskIndex, 1)
    setTasks(newTasks)
  }


  return (
    <AppContext.Provider value={{
      searchedTasks,
      searchIconClass,
      search,
      setSearch,
      tasksAmount,
      completedTasksAmount,
      onComplete,
      onDelete
    }}>
      {props.children}
    </AppContext.Provider>
  )

}

export { AppContext, AppProvider }