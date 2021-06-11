const initialState = {
    task : []
  };


// if anything happen, redux call reducer with current state and current action as argument
// it will return a new state
export default function todoReducer(state = initialState, action){
    switch(action.type){
      case "ADD": {
        return {
          ...state, task : [...state.task , action.payload]
        }
      }
  
      case "TOGGLE": {
        const {id} = action.payload;
        const newTask = [...state.task];  
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

      case "SHOW":
        // debugger;
        return {...state, task : action.payload}
  
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