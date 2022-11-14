import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({ filters, filter, setFilter }) => {
  const getClassName = (btnType) => btnType === filter ? 'btn btn-info' : 'btn btn-outline-secondary'
  const handleClick = (f) => setFilter(f)

  return (
    <div className="btn-group">
      {filters.map(f => (
        <button
          type="button"
          className={getClassName(f)}
          onClick={() => handleClick(f)}
          key={f}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default ItemStatusFilter;
