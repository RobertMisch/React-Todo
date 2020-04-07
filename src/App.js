import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';

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

///////////////////////////////////////////////////////////

// const groceries = [
//   {
//     name: 'Bananas',
//     id: 123,
//     purchased: false
//   },
//   {
//     name: 'Torillas',
//     id: 124,
//     purchased: false
//   }
// ]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
//CONSTRUCTORS
  //MY CONSTRUCTOR

  constructor(){
    super();
    this.state = {
      todoItems
    };
  }

  // //DEMO CONSTRUCTOR

  // constructor() {
  //   super();
  //   this.state = {
  //     groceries // same as === groceries: groceries
  //   };
  // }

///////////////////////////////////////////////////////////////////////////////////////////////

//FUNCTIONALITY

addTodo= (e, item)=>{
  e.preventDefault();
  const newTodo ={
    task: item,
    id: Math.floor((Math.random() * 1000) + 1),
    completed: false
  }
  this.setState({
    todoItems: [...this.state.todoItems, newTodo]
  })
}


// addItem = (e, item) => {
//   e.preventDefault();
//   const newItem = {
//     name: item,
//     id: Date.now(),
//     purchased: false
//   };
//   this.setState({
//     groceries: [...this.state.groceries, newItem]
//   });
// };
/////////////////////////////////////////////////////////////////////////////////////////////

toggleItems= (itemId) => {
  console.log(this.state.todoItems)
  this.setState({
    todoItems: this.state.todoItems.map(item =>{
      if(itemId === item.id){
          console.log(item.completed)
        return{
          ...item, completed: !item.completed
        }
      }
      return item;
    })
  })
}


// toggleItem = itemId => {
//   console.log(itemId);
//   // map over array
//   // when we find the item we clicked, toggle the purchased field
//   // otherwise return the item untouched
//   this.setState({
//     groceries: this.state.groceries.map(item => {
//       if (itemId === item.id) {
//         return {
//           ...item,
//           purchased: !item.purchased
//         };
//       }
//       return item;
//     })
//   });
// };

/////////////////////////////////////////////////////////////////////////////////////////////

clearCompleted = (event)=>{
  console.log(event)
  event.preventDefault();

  this.setState({
    todoItems: this.state.todoItems.filter(item => !item.completed)
  })
}

// clearPurchased = e => {
//   e.preventDefault();
//   // if item is purchased (item.purchased is true) then filter out
//   this.setState({
//     groceries: this.state.groceries.filter(item => !item.purchased)
//   });
// };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        />
      </div>
    );
  }
//
//

// render() {
//   console.log('rendering...');
//   return (
//     <div className="App">
//       <div className="header">
//         <h1>Shopping List</h1>
//         <TodoForm addItem={this.addItem} />
//       </div>
//       <TodoList
//         groceries={this.state.groceries}
//         toggleItem={this.toggleItem}
//         clearPurchased={this.clearPurchased}
//       />
//     </div>
//   );
// }

}
export default App;
