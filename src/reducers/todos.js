const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {

  case 'ADD_TODO':
    return [...state, action.todo]

  case 'EDIT_TODO':
    return state.map((todo)=>{
        if(todo.id === action.id){   
          return {id: action.id,...action.todo};
        }else{
          return todo;
        }
    })  

  case 'REMOVE_TODO':
    return state.filter((todo)=>{
      return todo.id !== action.id;
    })

  case 'SET_TODOS':
    return action.todos;

  default:
    return state
  }
}
