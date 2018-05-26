import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../routers/AppRouter'
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


// const date = new Date(); - complicated. moment better
// const now = moment();
// console.log(now.format('MMM Do, YYYY'));


class AddTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.todo ? props.todo.description : '',
            calendarFocused :false,
            createdAt:props.todo ? moment(props.todo.limitDate) : moment(),
            error: ''
        }
    }

    handleInputChange = (e) => {
        const text = e.target.value;
        this.setState(()=>({ text }));
        
    }
    

    handleFormSubmit = (e) => {
        e.preventDefault();
        let text = this.state.text.trim();
        text = text.replace(/ +(?= )/g,'');//remove multiple spaces
        const result = !!this.props.todos.find((todo)=>{
            return todo.description === text;
        });
            if(text){
                this.props.onSubmit({description:text,completed:this.props.todo? this.props.todo.completed: false,limitDate:this.state.createdAt.valueOf()});
                this.setState(()=>({ text:'',error:'' }));
        
                history.push('/dashboard');
            }
            else{
                this.setState(()=>({ error:'Please enter valid value' }));
            }
        

    }

    onDateChange = (createdAt) =>{//createdat supplied automatic
        if(createdAt){
            this.setState(()=>({ createdAt:createdAt }));
        }
    };
    onFocusChange = ({ focused }) =>{
        this.setState(()=>({ calendarFocused:focused }));
    };
    
    render() {
        return (
            <div >
                <p>{this.state.error}</p>
                <form 
                onSubmit={this.handleFormSubmit}
                >
                    <input 
                    autoFocus={true}
                    onChange={this.handleInputChange}
                    placeholder='Enter todo here'
                    value={this.state.text}
                    />
                    <button>Add Todo</button>
                    <p>Must be completed until :</p>
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return({
        todos: state.todos
    })
}

export default connect(mapStateToProps)(AddTodoForm);