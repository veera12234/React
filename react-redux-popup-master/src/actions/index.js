export function addTodo(idRef, text) {
  return {
    __proto__: null,
    type: 'ADD_TODO',
    id: idRef,
    text
  }
}

export function increment() {
  return {
    __proto__: null,
    type: 'INCREMENT'
  }
}

export const setVisibilityFilter = (filter) => ({
  __proto__: null,
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  __proto__: null,
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
