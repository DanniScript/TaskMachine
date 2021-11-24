import './style.css'

function Header() {
  return (
    <header>
      <img draggable="false" src="./logo.svg" alt="TaskMachine logo" />
      <h1 className="prevent-select">TaskMachine</h1>
    </header>
  )
}

export { Header }