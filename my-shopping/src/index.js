import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bulma/css/bulma.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './App'

const initialState = {
  task : [
      {
      id: 1,
      content: "icebear",
      date : new Date(),
      completed : false,
    }
  ]
};

// if anything happen, redux call reducer with current state and current action as argument
// it will return a new state
function reducer(state = initialState, action){
  switch(action.type){
    case "ADD": {
      return {
        ...state, task : [...state.task , action.payload]
      }
    }

    case "TOGGLE": {
      const {id} = action.payload;
      // console.log(id);
      // debugger;

      const newTask = [...state.task];
      // state.task[id-1].completed = !state.task[id-1].completed;
      // // newTask[id-1].completed = !state.task[id-1].completed;
      // console.log(newTask[id-1].completed);
      // // newTask[id-1].content = "lala"
      // console.log(newTask);
      // debugger;

      return {
        ...state,
        task : newTask.map(todo => {
          if(todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          else return todo
        })
      }   
    }

    case "UPDATE":
      const list = state.valueQ.map(j => {
        if(j === action.input){
          return j + ' Beautiful'  
        }
        else{ return j }
      })
      console.log(list)
      return {
        valueQ: list
      }

    case "DELETE":
      console.log(action.payload)
      const filteredId = state.task.filter(task => task.id !== action.payload.id)
      return {
        ...state, task : [...state.task , filteredId]
      } 
    case "RESET":
      console.log(state)
      return {
        valueQ : initialState.valueQ
      }
  }
  return state;
}

const store = createStore(reducer)
const Index = () => (
  <Provider store={store}> 
    <App/>
  </Provider>
)

ReactDOM.render(<Index/>,  document.getElementById('root'));


