const CategoryFilter = ({ categories, filter, handleFilter }) => {
	const renderFilterButtons = categories.map(c => {
		return <button
			key={c}
			type='button'
			children={c}
			value={c}
			onClick={handleFilter}
			aria-label={`filter by ${c}`}
			className={ filter === c ? 'selected' : null }
		/>
	})

	return (
		<div className='categories'>
			<h5>Category filters</h5>
			{renderFilterButtons}
		</div>
)}

export default CategoryFilter
