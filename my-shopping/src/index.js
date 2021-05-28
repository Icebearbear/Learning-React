import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';
// import Main from "./Main";
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import App from './App'
import AddTodo from './components/AddTodo';
import Input from './components/Input';
import ViewTodo from './components/ViewTodo';

const initialState = {
  task : [
      {
      id: 1,
      content: "icebear"
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


