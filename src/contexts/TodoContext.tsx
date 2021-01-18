import React, { createContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({
    todos: [ ],
    addTodo: () => {},
    removeTodo : () => {},
    toggle: ()=> { },
});

const TodoProvider = (props:any) => {
    const todos: Todo[] = [
        {id:1, title:"Ir ao supermercado",done:true},
        {id:2, title:"Ir a academia",done:false}
    ];
    const addTodo = (title: string) =>{
        console.log('add'+title)
    }
    const removeTodo = (todo: Todo) => {
        console.log('remove'+todo)
    }
    const toggle = (todo : Todo) => {
        console.log('toggle' + todo)
    }
    return (
        <TodoContext.Provider value={
            {todos, addTodo, removeTodo, toggle}
        }>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;