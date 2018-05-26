import React from 'react';
import TodoList from './TodoList';
import { history } from '../routers/AppRouter'

const DashboardPage = () => (
  <div className="content-container" >
    <button onClick={()=>{
      history.push('/create');
    }}>Create Todo</button>
    <TodoList/>
  </div>
);

export default DashboardPage;
