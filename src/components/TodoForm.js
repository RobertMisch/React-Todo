import React from 'react';
import Todo from './Todo';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
          item:''
        };
      }

    // handleChanges(){

    // }
    // submitChanges(){

    // }

    render(){
        console.log('rending form...')
        return(
            <form onSubmit={this.submitChanges}>
                <input
                type='text'
                value={this.state.task}
                name='item'
                onChange={this.handleChanges}
                />
                <button>add todo</button>
                <button onClick={this.clearPurchased}>clear completed</button>
            </form> 
        )
        
    }
}

export default TodoForm;