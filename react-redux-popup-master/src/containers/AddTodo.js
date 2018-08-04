import React from 'react'
import { connect } from 'react-redux'
import { addTodo, increment } from '../actions'

let AddTodo = ({ dispatch, indexReference }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(indexReference, input.value));
        dispatch(increment());
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  indexReference: state.indexReference
})

AddTodo = connect(mapStateToProps)(AddTodo)


export default AddTodo
