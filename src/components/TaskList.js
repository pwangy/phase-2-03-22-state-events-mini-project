import { v4 as uuid } from 'uuid'
import Task from './Task'

const TaskList = ({ tasks }) => {
  // map array and generate uid for each task
  const renderTasks = tasks.map(t => <Task key={uuid()} {...t} />)
  
	return (
		<div className='tasks'>
			<ul>{renderTasks}</ul>
		</div>
	)
}

export default TaskList