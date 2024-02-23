function CategoryFilter({ cat }) {
  const handleFilter = console.log('start filtering!')

	const renderFilterButtons = cat.map((c) => (
		<button
      key={c}
      type='button'
			value={c}
      children={c}
			onClick={handleFilter}
			aria-label={`filter by ${c}`}
      className=''
		/>
	))

	return (
		<div className='categories'>
			<h5>Category filters</h5>
			{renderFilterButtons}
		</div>
	)
}

export default CategoryFilter
