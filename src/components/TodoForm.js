import React from 'react';
import Todo from './Todo';

class TodoForm{
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
                value={this.state.item}
                name='item'
                onChange={this.handleChanges}
                />
            </form> 
        )
        
    }
}

export default TodoForm;