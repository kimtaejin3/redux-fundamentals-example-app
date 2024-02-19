import React from 'react'
import TodoListItem from './TodoListItem'
import { useSelector, shallowEqual } from 'react-redux'
import { selectFilteredTodoIds } from './todosSlice'

// const selectTodoIds = (state) => state.todos.map((todo) => todo.id)

const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds)
  const loadingStatus = useSelector((state) => state.todos.status)

  if (loadingStatus === 'loading') {
    return (
      <div className="todo-list">
        <div className="loader" />
      </div>
    )
  }

  const renderedListItems = todoIds.map((todosId) => {
    return <TodoListItem key={todosId} id={todosId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
