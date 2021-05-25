import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';
// import Main from "./Main";
import { Provider } from 'react-redux';
import { createStore } from 'redux'
// import Tab from "./SimpleForm"
import Input from './components/Input'
import ViewTodo from './components/ViewTodo'
const initialState = {
  allIds: [],
  byIds: {}
};

// if anything happen, redux call reducer with current state and current action as argument
// it will return a new state
function reducer(state = initialState, action){
  switch(action.type){
    case "ADD": {
      const { id, content } = action.payload;
      // console.log(action.payload)

      return {
        ...state, allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
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
      const { ide } = action.payload
      console.log(ide)
      function test(Todoid){
        console.log(Todoid, " " , ide)
        parseInt(Todoid) !== ide ? console.log('yes') : console.log("no")
      } 
      const filteredId = state.allIds.filter(Todoid => test(Todoid))
      console.log(filteredId.map(id => typeof(id)))
      // const filteredTodo = state.byIds.filter(TodoContent => TodoContent !== content)
      return {
        ...state, allIds: filteredId
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
const App = () => (
  <Provider store={store}> 
    {/* <Tab/> */}
    <Input/>
    <ViewTodo/>
  </Provider>
)

ReactDOM.render(<App/>,  document.getElementById('root'));


