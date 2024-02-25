import { v4 as uuid } from 'uuid'
import Task from './Task'

const TaskList = ({ tasks, filter}) => {
	const taskList = tasks.filter(t => filter === 'All' || t.category === filter)

	// map array and generate uid for each task
	const renderTasks = taskList.map(t => <Task key={uuid()} {...t} />)
  
	return (
		<div className='tasks'>
			<ul>{renderTasks}</ul>
		</div>
)}

export default TaskList