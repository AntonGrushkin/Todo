import React, { useState, useMemo } from 'react';

import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';
import ItemAddForm from './components/item-add-form/item-add-form';

import './index.css';

const defaultTodos = [
  { label: 'Drink Coffee', important: false, done: false, id: 1 },
  { label: 'Make Awesome App', important: false, done: false, id: 2 },
  { label: 'Have a lunch', important: false, done: false, id: 3 }
];

const filters = ['All', 'Active', 'Done'];

const App = () => {
  const [todos, setTodo] = useState(defaultTodos)
  const [filter, setFilter] = useState('All')
  const [term, setTerm] = useState('')

  const createTodo = label => ({
    id: todos.length + 1,
    important: false,
    label,
  })

  const addTodo = label => {
    const todo = createTodo(label)

    setTodo([...todos, todo])
  }

  const deleteTodo = id => {
    const filteredTodos = todos.filter(t => t.id !== id)
    setTodo(filteredTodos)
  }

  const updateTodoField = (todo, field, value) => ({
    ...todo,
    [field]: value
  })

  const toggleImportant = (id) => {
    const updated = todos.map(t => t.id === id ? updateTodoField(t, 'important', !t.important) : t)

    setTodo(updated)
  }

  const toggleDone = (id) => {
    const updated = todos.map(t => t.id === id ? updateTodoField(t, 'done', !t.done) : t)

    setTodo(updated)
  }

  const filterByType = (items) => {
    switch (filter) {
      case 'Active':
        return items.filter(i => !i.done)
      case 'Done':
        return items.filter(i => i.done)
      default:
        return items
    }
  }

  const search = (items, value) => {
    const foundTodos = items.filter(
      t => t.label.toLowerCase().includes(value.toLowerCase())
    )

    return filterByType(foundTodos.length ? foundTodos : items)
  }

  const availableTodos = useMemo(() => {
    return search(todos, term)
  }, [todos, term])

  const { active, done } = useMemo(() => ({
    active: todos.filter(t => !t.done),
    done: todos.filter(t => t.done),
    important: todos.filter(t => t.important)
  }), [todos])

  return (
    <div className="todo-app">
      <AppHeader toDo={active.length} done={done.length} />
      <div className="top-panel d-flex">
        <SearchPanel setTerm={setTerm} />
        <ItemStatusFilter
          filters={filters}
          filter={filter}
          setFilter={setFilter}
        />
      </div>

      <TodoList
        onDeleted={(id) => deleteTodo(id)}
        onToggleImportant={(id) => toggleImportant(id)}
        onToggleDone={(id) => toggleDone(id)}
        todos={availableTodos}
      />
      <ItemAddForm onItemAdd={(label) => addTodo(label)} />
    </div>
  );
};

export default App;
