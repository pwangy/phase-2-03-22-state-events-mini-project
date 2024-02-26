import { useState } from 'react'
import { CATEGORIES, TASKS } from '../data'
import CategoryFilter from './CategoryFilter'
import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'

const App = () => {
	const [tasks, setTasks] = useState(TASKS)
	const [filter, setFilter] = useState('All')
	const handleNewTask = newTask => setTasks([...tasks, newTask])
	const handleFilter = e => setFilter(e.target.value)
	
	return (
		<div className='App'>
			<h2>My tasks</h2>
			<CategoryFilter categories={CATEGORIES} filter={filter} handleFilter={handleFilter} />
			<NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTask} />
			<TaskList tasks={tasks} filter={filter} />
		</div>
)}

export default App