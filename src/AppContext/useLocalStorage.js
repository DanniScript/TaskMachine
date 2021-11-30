import React from 'react'

function useLocalStorage(localStorageItemName, initialValue) {
  
  const [items, setItems] = React.useState([])
  const [error, setError] = React.useState(false)

  React.useEffect( () => setTimeout(() => {
    try {
      const localStorageItem = localStorage.getItem(localStorageItemName)
      let parsedItem
      if (!localStorageItem) {
        localStorage.setItem(localStorageItemName, JSON.stringify(initialValue))
        parsedItem = initialValue
      } else {
        parsedItem = JSON.parse(localStorageItem)
      }
      setItems(parsedItem)
    } catch(error) {
      setError(error)
    }
  }, 1000) )

  const saveItems = (newItems) => {
    try {
      const stringifiedItem = JSON.stringify(newItems)
      localStorage.setItem(localStorageItemName, stringifiedItem)
      setItems(newItems)
    } catch(error) {
      setError(Error)
    }
  }

  return {
    items,
    saveItems,
    error
  }
}

export { useLocalStorage }