// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props =>{
    return(
        <div>
            {
                props.todoItems.map(item =>{
                    <Todo key={item.id} item={item.task} toggleItem={props.toggleItems}/>
                })
            }
        </div>
    )
})

export default TodoList;