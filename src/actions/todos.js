import database from '../firebase/firebase';
import moment from 'moment';

export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo
})

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id
})

export const editTodo = (id,todo) => ({
    type: 'EDIT_TODO',
    id,
    todo
  })

export const startRemoveTodo = (id) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
    database.ref(`/users/${uid}/todos/${id}`).remove().then(()=>{
      dispatch(removeTodo(id));
    });
  }
}

export const startAddTodo = (todo={ description:'', completed:false,limitDate : moment() }) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      database.ref(`/users/${uid}/todos`).push(todo).then((ref)=>{
        dispatch(addTodo({ id:ref.key, ...todo }));
      });
    }
  }

export const startEditTodo = (id,updates) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
    database.ref(`/users/${uid}/todos/${id}/`).update({
        ...updates
    }).then(()=>{
      dispatch(editTodo(id,{ ...updates }));
    });
  }
};

export const startSetTodos = () => {
  return (dispatch, getState)=>{
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/todos`).
    once('value').then((snapshot)=>{
        const todos = [];
        snapshot.forEach((childSnapshot)=>{//key is the id, which is the snapshot component name, its not part of the object, and parse the rest of array with ...snapshot.val
            todos.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        dispatch(setTodos(todos));
    });
    
  };
};


export const setTodos = (todos) => ({
  type: 'SET_TODOS',
  todos
})