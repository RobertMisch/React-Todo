import React from 'react';
import Todo from './Todo';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: ''
        };
        console.log(props)
      }

      handleChanges = (event) =>{
        this.setState({[event.target.name]: event.target.value})
      }
      submitChanges = (event)=>{
        event.preventDefault()
        this.setState({item:''})
        this.props.addItem(event, this.state.item)
      }
      

    render(){
        console.log('rending form...')
        return(
        <form onSubmit={this.submitItem}>
            <input
            type="text"
            value={this.state.item}
            name="item"
            onChange={this.handleChanges}
            />
            <button>Add</button>
            <button onClick={this.clearCompleted}>clear</button>
      </form>
        )
        
    }
}

export default TodoForm;