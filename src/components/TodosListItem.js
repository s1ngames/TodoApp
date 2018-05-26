import React from 'react'
import { startRemoveTodo, startEditTodo } from '../actions/todos'
import { connect } from 'react-redux';
import EditTodoPage from './EditTodoPage';
import { Link } from 'react-router-dom';
import moment from 'moment';


const TodoListItem = ( props ) => {
  return (
    <div className={props.todo.completed? "list-item-completed":"list-item"}>
      <p>
     {`${props.index+1}.`}
     <Link to={`/edit/${props.todo.id}`}>{
      props.todo.description
     }</Link>
     {` || Until - ${moment(props.todo.limitDate).format('DD/MM/YYYY')} || 
       ${props.todo.completed? 'Completed' : `Must be Done ${moment(props.todo.limitDate).fromNow()}`}`}
       </p>
      <button 
      className="list-item-button"
      onClick={()=>{
        props.dispatch(startEditTodo(props.todo.id,{completed:!props.todo.completed,description:props.todo.description,limitDate:props.todo.limitDate}))}}>
      {props.todo.completed ? 'Uncomplete' : 'Complete' }
      </button>
     
    </div>
  )
}



export default connect()(TodoListItem);

// <button onClick={()=>{props.dispatch(startRemoveTodo(props.todo.id))}}>Remove</button>