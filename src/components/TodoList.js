// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props =>{
    console.log(props.todoItems)
    return(
        <div>
            {
                props.todoItems.map(item =>{
                    console.log(item)
                    return(<Todo key={item.id} item={item.task} toggleItem={props.toggleItems}/>)
                })
            }
        </div>
    )
})

export default TodoList;