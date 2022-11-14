import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({
  label,
  important,
  done,
  onDeleted,
  onToggleImportant,
  onToggleDone
}) => {

  const getClassName = () => {
    let classNames = 'todo-list-item'

    if (done) classNames += ' done'
    if (important) classNames += ' important'

    return classNames
  }

  return (
    <span className={getClassName()}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}
      >
        {label}
      </span>

      <div className="todo-list-item-btn-group">
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>

        <button
          type="button"
          className="btn btn-outline-success btn-sm"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>
      </div>
    </span>
  );
};

export default TodoListItem;
