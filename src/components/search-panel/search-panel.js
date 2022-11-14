import React, { useState } from 'react'

import './search-panel.css'

const SearchPanel = ({ setTerm }) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    const term = e.target.value
    setValue(term)
    setTerm(term)
  }

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={(e) => handleChange(e)}
      value={value}
    />
  )
}

export default SearchPanel;
