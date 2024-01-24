import { combineReducers } from 'redux'
import todosReducer from './feature/todos/todosSlice'
import filtersReducer from './feature/filters/filtersSlice'

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer
