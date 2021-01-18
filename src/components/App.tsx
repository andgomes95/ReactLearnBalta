import React from 'react';
import Navbar from './Navbar';
import TodoList from './TodoList';
import TodoContext from '../contexts/TodoContext';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import AddTodo from './AddTodo';

const App = () =>{
    return (
        <TodoContext>
            <Router>
                <Navbar></Navbar>
                <div className="uk-container">
                    <Switch>
                        <Route path="/create">
                            <AddTodo></AddTodo>
                        </Route>
                        <Route path="/">
                            <TodoList></TodoList>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </TodoContext>

    )
}

export default App;