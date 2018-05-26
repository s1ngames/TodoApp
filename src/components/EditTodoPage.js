import React from 'react'
import { connect } from 'react-redux'
import AddTodoForm from './AddTodoForm'
import { startEditTodo, startRemoveTodo } from '../actions/todos';
import { history } from '../routers/AppRouter';

const EditTodoPage = (props) => {
    // console.log(props.match);
    
  return (
    <div className="content-container">
        <h3>{`Edit Todo : ${props.todo.description}`}</h3>
        <AddTodoForm 
          todo={props.todo}  
          onSubmit = {(updates)=>{
            props.dispatch(startEditTodo(props.todo.id,{
                ...updates
          }))
          }}  
        />
        <button onClick={()=>{
            props.dispatch(startRemoveTodo(props.todo.id))
            history.push('/dashboard')
        }}>Remove</button>
    </div>
  )
}

const mapStateToProps = (state,props) => ({
    todo : state.todos.find((todo)=>{
        return todo.id === props.match.params.id;
    })
});


export default connect(mapStateToProps)(EditTodoPage); 
