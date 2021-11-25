import './style.css'

function Header() {
  return (
    <header className="prevent-select">
      <img draggable="false" src="./logo.svg" alt="TaskMachine logo" />
      <h1>TaskMachine</h1>
    </header>
  )
}

export { Header }