const FilterInput = ({ filter, onFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        vale={filter}
        placeholder="Filter Coins By Name or Symbol"
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
