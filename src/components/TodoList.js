// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

//this file is a target for focus

const TodoList = props =>{
    console.log(props.todoItems)
    return(
        <div>
            {
                props.todoItems.map(item =>(
                    <Todo key={item.id} item={item} toggleItem={props.toggleItems}/>
                ))
            }
        </div>
    )
}
///////////////////////////////////////////////////////////////////////////////////
// return (
//     <div className="shopping-list">
//       {props.groceries.map(item => (
//         <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
//       ))}
//       <button className="clear-btn" onClick={props.clearPurchased}>
//         Clear Purchased
//       </button>
//     </div>
//   );
// }

export default TodoList;