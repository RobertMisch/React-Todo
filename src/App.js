import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todoItems=[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoItems
    };
  }
  

//functionality for TodoList

toggleItems(itemId){
  console.log(itemId)
  this.setState({
    todoItems: this.state.todoItems.map(item =>{
      if(itemId === item.id)
      return{
        ...item, completed: !item.completed
      }
    })
  })
}

addTodo(event, item){
  event.preventDefault();
  const newTodo ={
    task: item,
    id: Math.floor((Math.random() * 1000) + 1),
    completed: false
  }
  this.setState({
    todoItems: [...this.state.todoItems, newTodo]
  })
}

clearCompleted(event){
  event.preventDefault();

  this.setState({
    todoItems: this.state.todoItems.filter(item => !item.completed)
  })
}

//functionality for TodoForm
handleChanges(event){
  this.setState({[event.target.name]: event.target.value})
}
submitChanges(event){
  this.setState({task:''})
  this.props.addItem(event, this.state.task)
}

render(){
  console.log('rendering')
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList /*todo state, toggleitem*/
          todoItems={this.state.todoItems}
          toggleItems={this.toggleItems}
        />
        <TodoForm /*add todo button, clear completed*/
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
          handleChanges={this.handleChanges}
          submitChanges={this.submitChanges}
        />
      </div>
    );
  }
}
export default App;
