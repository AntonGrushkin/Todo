import React, { useState } from 'react'

import './item-add-form.css'

const ItemAddForm = ({ onItemAdd }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    onItemAdd(value)
    setValue('')
  }

  return (
    <form
      className="item-add-form d-flex"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form-control"
        placeholder="What needs to be done?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        disabled={!value.length}
      >
        Add Item
      </button>
    </form>
  )
}

export default ItemAddForm
