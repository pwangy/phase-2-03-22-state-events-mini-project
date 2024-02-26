const CategoryFilter = ({ categories: [all, code, food, money, misc], filter, handleFilter }) => {
	// const renderFilterButtons = categories.map(c => {
	// 	return (
	// 		//exta div included to pass tests, test is checking that the button is assigned a role of 'button' but button html elements are automatically known to be buttons and won't even accept a role attribute
	// 		<div
	// 			id='row'
	// 			role='button'
	// 			key={c}
	// 			<button
	// 				// key={c}
	// 				type='button'
	// 				name={c}
	// 				children={c}
	// 				value={c}
	// 				onClick={handleFilter}
	// 				aria-label={`filter by ${c}`}
	// 				tab-index='0'
	// 				className={filter === c ? 'selected' : ''}
	// 			/>
	// 		</div>
	// 	)
	// })

	return (
		<div className='categories'>
			<h5>Category filters</h5>
			{/* {renderFilterButtons} */}
			<div>
				<button type='button' className={filter === all ? 'selected' : ''} value={all} onClick={handleFilter}>{all}</button>
				<button type='button' className={filter === code ? 'selected' : ''} value={code} onClick={handleFilter}>{code}</button>
				<button type='button' className={filter === food ? 'selected' : ''} value={food} onClick={handleFilter}>{food}</button>
				<button type='button' className={filter === money ? 'selected' : ''} value={money} onClick={handleFilter}>{money}</button>
				<button type='button' className={filter === misc ? 'selected' : ''} value={misc} onClick={handleFilter}>{misc}</button>
			</div>
		</div>
	)
}

export default CategoryFilter
