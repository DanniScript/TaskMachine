import React from 'react'

const AppContext = React.createContext()

function AppProvider(props) {

  const tasks = [
    {id: '1', text: 'Exercise', completed: false},
    {id: '2', text: 'Study React.js', completed: true},
    {id: '3', text: 'Walking the dog', completed: true},
    {id: '4', text: 'Shopping', completed: false}
  ]

  const [search, setSearch] = React.useState('')

  return (
    <AppContext.Provider value={{
      tasks,
      search,
      setSearch
    }}>
      {props.children}
    </AppContext.Provider>
  )

}

export { AppContext, AppProvider }