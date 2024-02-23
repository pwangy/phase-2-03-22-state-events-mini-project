const Task = ({ text, cat }) => {

	return (
		<div className='task'>
			<div className='label'>{cat}</div>
      {/* to do item */}
			<div className='text'>{text}</div>
      {/* delete */}
			<button className='delete'>X</button>
		</div>
	)
}

export default Task