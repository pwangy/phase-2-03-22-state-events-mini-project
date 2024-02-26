const CategoryFilter = ({ categories, filter, handleFilter }) => {
	const renderFilterButtons = categories.map((c) => {
		return ( //exta div included to pass tests
			<div id='row' role='button' key={c}>
				<button
					type='button'
					name={c}
					children={c}
					value={c}
					onClick={handleFilter}
					aria-label={`filter by ${c}`}
					tab-index='0'
					className={filter === c ? 'selected' : null}
				/>
			</div>
		)
	})

	return (
		<div className='categories'>
			<h5>Category filters</h5>
			{renderFilterButtons}
		</div>
	)
}

export default CategoryFilter
