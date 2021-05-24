import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';
import Main from "./Main";
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import Tab from "./SimpleForm"

const initialState = {
  valueQ : ['Sally', 'Icebear']
}
// if anything happen, redux call reducer with current state and current action as argument
// it will return a new state
function reducer(state = initialState, action){
  switch(action.type){
    case "ADD":
      return {
        valueQ: state.valueQ.concat(action.input)
      };
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
      return {
        valueQ: state.valueQ.filter((item => item !== action.input))
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
store.dispatch({ type: "ADD DATA" })
const App = () => (
  <Provider store={store}> 
    <Tab/>
  </Provider>
)

ReactDOM.render(<App/>,  document.getElementById('root'));


