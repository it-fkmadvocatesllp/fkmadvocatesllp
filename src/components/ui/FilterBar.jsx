import './FilterBar.css';

const FilterBar = ({ filters, activeFilters, onFilterChange, onClear }) => (
  <div className="filter-bar">
    {Object.entries(filters).map(([key, options]) => (
      <div key={key} className="filter-bar__group">
        <label className="filter-bar__label" htmlFor={`filter-${key}`}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </label>
        <select
          id={`filter-${key}`}
          className="filter-bar__select"
          value={activeFilters[key] || ''}
          onChange={(e) => onFilterChange(key, e.target.value)}
        >
          <option value="">All</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    ))}
    <button type="button" className="filter-bar__clear" onClick={onClear}>
      Clear
    </button>
  </div>
);

export default FilterBar;
