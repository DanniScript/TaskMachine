import React from 'react'
import { AppContext } from '../AppContext'

import './style.css'

function SearchBar() {
  const { search, setSearch } = React.useContext(AppContext)

  return (
    <div className="searchbar">
      <svg className="searchbar__icon" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-dark" d="M124.941 124.941C129.02 120.862 129.02 114.249 124.941 110.171L102.434 87.6668C99.0905 84.324 98.6671 79.1233 100.652 74.8326C103.76 68.1165 105.5 60.6384 105.5 52.7487C105.5 23.6156 81.8729 0 52.7497 0C23.6266 0 0 23.6156 0 52.7487C0 81.8818 23.6214 105.498 52.7497 105.498C60.6367 105.498 68.1148 103.758 74.8315 100.651C79.1207 98.6677 84.3187 99.0918 87.6604 102.433L110.172 124.942C114.25 129.02 120.863 129.019 124.941 124.941V124.941ZM52.7497 84.3981C35.2737 84.3981 21.0999 70.2244 21.0999 52.7487C21.0999 35.273 35.2791 21.0995 52.7497 21.0995C70.2204 21.0995 84.3996 35.273 84.3996 52.7487C84.3996 70.2244 70.2257 84.3981 52.7497 84.3981Z" fill="black"/>
      </svg>
      <input 
        className="searchbar__input" type="text" 
        placeholder="Search task" 
        value={search}
        onChange={ev => setSearch(ev.target.value)}
      />
      <span>You have <strong>completed 2</strong> of 3 tasks</span>
    </div>
  )
}

export { SearchBar }