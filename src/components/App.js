import { useState } from 'react'
import { CATEGORIES, TASKS } from '../data'
import CategoryFilter from './CategoryFilter'
import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'

const App = () => {
	const [tasks, setTasks] = useState(TASKS)
	const [filter, setFilter] = useState('All')

	const handleFilter = e => setFilter(e.target.value)

	// const tasksList = setTasks(tasks.filter(t => filter === 'All' || t.category === filter ))
	
	return (
		<div className='App'>
			<h2>My tasks</h2>
			<CategoryFilter
				categories={CATEGORIES}
				filter={filter}
				handleFilter={handleFilter}
			/>
			<NewTaskForm />
			<TaskList tasks={tasks} filter={filter} />
		</div>
	)
}

export default App

// NewTaskForm
// Pass the list of categories to this component from App. Then, update this component to display <option> elements for each category inside of the <select> element except the "All" category, so that the user can select a category when adding a new task.

// Next, update this form to be a controlled component, so that all form inputs are captured in state.

// When the form is submitted, add a new task to the list with the text and category from the form. For the tests for this feature to pass, you'll need a callback prop named onTaskFormSubmit that takes a task object as an argument.
