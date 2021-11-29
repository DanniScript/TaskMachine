import './style.css'

function NewTaskButton(props) {
  const onClick = () => {
    props.setOpenModal(true)
  }

  return (
    <div className="sub-container new-task-button__container">
      <div className="new-task-button">
        <button onClick={onClick}>Add Task</button>
      </div>
    </div>
  )
}

export { NewTaskButton }