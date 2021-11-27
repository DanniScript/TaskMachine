import './style.css'

function NewTaskButton() {
  const onClick = () => alert('Modal')

  return (
    <div className="new-task-button__container">
      <div className="new-task-button">
        <button onClick={onClick}>Add Task</button>
      </div>
    </div>
  )
}

export { NewTaskButton }