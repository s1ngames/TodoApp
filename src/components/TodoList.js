import React from 'react';
import TodoListItem from './TodosListItem'
import { connect } from 'react-redux';
import moment from 'moment';

// const todos = ['one','two','three','four'];

class TodoList extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return(
        <div>
        <h3 className="list-header">{`Your Todos - ${this.props.todos.filter((todo)=>{
            return todo.completed === false;
        }).length} not completed`}</h3>
  
        {this.props.todos.map((todo,index)=>{
            return (<TodoListItem key={index} todo={todo} index={index}/>);
        })}
        
        </div>)
    };
    
};

const mapStateToProps = (state) => ({
    todos: state.todos.sort((a,b)=>{
        return a.limitDate > b.limitDate ? 1:-1
    })
});

export default connect(mapStateToProps)(TodoList);

// .sort((a,b)=>{
//     return (a.completed === b.completed)? 0: a ? 1 :-1;//sort all false, and then trues
//     // return (x === y)? 0 : x? -1 : 1; first trues and then falses
// })