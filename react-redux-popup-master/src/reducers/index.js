import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import indexReference from './indexReference'

const todoApp = combineReducers({
  indexReference,
  todos,
  visibilityFilter
})

export default todoApp
