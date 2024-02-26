// import { v4 as uuid } from 'uuid'
import Task from './Task'

const TaskList = ({ tasks, filter }) => {
	const taskList = tasks.filter(t => !filter || filter === 'All' || t.category === filter)
	const renderTasks = taskList.map(t => <Task key={t.text} {...t} />)
	// uuid fn ^^ moved into App.js to pass tests
	
	return (
		<div className='tasks'>
			<ul>{renderTasks}</ul>
		</div>
)}

export default TaskList