import React from 'react';
// import Todo from './Todo';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            task: ''
        };
        
        // console.log(props)
      }

    // constructor() {
    //     super();
    //     this.state = {
    //       item: ''
    //     };
    //   }

///////////////////////////////////////////////////////////////////////

      handleChanges = (e) =>{
        this.setState({ [e.target.name]: e.target.value })
      }

    // handleChanges = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    //   };

///////////////////////////////////////////////////////////////////////

      submitChanges = (e)=>{
        e.preventDefault()
        this.setState({ task: ''})
        this.props.addTodo(e, this.state.task)
      }

    // submitItem = e => {
    //     e.preventDefault();
    //     this.setState({ item: '' });
    //     this.props.addItem(e, this.state.item);
    //   };

      
///////////////////////////////////////////////////////////////////////
    render(){
        console.log('rending form...')
        return(
        <form onSubmit={this.submitChanges}>
            <input
                type="text"
                value={this.state.task}
                name="task"
                onChange={this.handleChanges}
            />
            <button>Add</button>
            <button onClick={this.props.clearCompleted}>clear</button>
      </form>
        )
        
    }
    //
    //
    
    //   render() {
    //     console.log('rendering form');
    //     return (
    //       <form onSubmit={this.submitItem}>
    //         <input
    //           type="text"
    //           value={this.state.item}
    //           name="item"
    //           onChange={this.handleChanges}
    //         />
    //         <button>Add</button>
    //       </form>
    //     );
    //   }
}

export default TodoForm;