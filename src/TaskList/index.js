import './style.css'

function TasksList(props) {
  return (
    <div className="task-list">
      {props.children}
    </div>
  )
}

function TasksListError() {
  return <p>Error, reload the page</p>
}

export { TasksList, TasksListError }