import React from 'react'
import { connect } from 'react-redux'
import AddTodoForm from './AddTodoForm'
import { startAddTodo } from '../actions/todos';

const CreateTodoPage = (props) => {
  return (
    <div className="content-container">
      <h3>Create Todo</h3>
      <AddTodoForm
        onSubmit = {({description, limitDate})=>{
          props.dispatch(startAddTodo({
            description,
            completed: false,
            limitDate
        }))
        }
        }
      />
    </div>
  )
}

export default connect()(CreateTodoPage);
