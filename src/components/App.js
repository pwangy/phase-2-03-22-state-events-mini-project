import { CATEGORIES, TASKS } from '../data'

import CategoryFilter from './CategoryFilter'
import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'

// console.log("Here's the data you're working with")
// console.log({ CATEGORIES, TASKS })

const App = () => {
	return (
		<div className='App'>
			<h2>My tasks</h2>
			<CategoryFilter cat={CATEGORIES} />
			<NewTaskForm />
			<TaskList tasks={TASKS} />
		</div>
)}

export default App

// CategoryFilter
// Pass the list of categories to this component from App. Then, update this component to display <button> elements for each category. In order to pass the test, the buttons will need a key prop equal to the category.

// When a button is clicked, the following should happen:

// Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
// The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
// If the button for "All" is selected, all the tasks should be displayed.

// NewTaskForm
// Pass the list of categories to this component from App. Then, update this component to display <option> elements for each category inside of the <select> element except the "All" category, so that the user can select a category when adding a new task.

// Next, update this form to be a controlled component, so that all form inputs are captured in state.

// When the form is submitted, add a new task to the list with the text and category from the form. For the tests for this feature to pass, you'll need a callback prop named onTaskFormSubmit that takes a task object as an argument.