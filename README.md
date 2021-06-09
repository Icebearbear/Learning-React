# Learning-React

## Running

### REACT
1. go to my-shopping and npm start
2. open http://localhost:3000/

### EXPRESS
1.  go to servers/functions & npm run serve
3.  base URL : http://localhost:5001/todolist2-b7979/us-central1/app/
4.  add path for other functions

## Installation

npm install bulma

npm install react-router-dom

npm install react-redux

npm install redux react-redux redux-thunk
npm install --save-dev redux-devtools-extension

npm i express
npm i cors

## controlled components
a component that its state is controlled by other components, it doesn't have a state

<input> maintain its own state and update its state with user input.
1. the state is updated with setState
2. the display value is this.state.value
3. the input's value is driven by React state
4. it can be passed to another UI or component
5. setState is to re-render the component

what is really happening:
1. when user gives input, onChange will call the callback function handleChange
2. in callback function, create another state variable 
3. once submit button is clicked, onClick will call the callback function handleSubmit
4.  in callback function, it reference the input element, get its current value, and    update it with the state variable created at no.2

Methods used:
1. array filter method to remove data, filter() creates a new array with elements that pass the test implemented
2. array map method to update data, map() creates new array populated with the results of calling, after you do some thing with the data
3. array concat method to add data, concat() returns a new array after merging old and new arrays

## redux
it provides a central store that hold all states in the app. it made the app contianed in a single data structure , the state tree.
1. Actions - payloads of info that send data from app to the store. it is sent using store.dispatch()
2. Action creator - actions are created by action creator.
3. Store - it holds all the application states. it can dispatch actions and it receiveds actions that are dispatched to it
4. Reducer - After store received the states, it passes dispatched action to reducer. it specify how the app's state changes in response to actions sent to store.
5. Components - the display or view layer

what is happening redux (backwards):
1. connect redux store to component. it returns connected component with dispatch functions - connect()(Component) '
2. to get data, we have to tell redux what you wan to request. it takes a state from the reducer that is forwarded from the store. it returns props key and props value - mapStateToProp(state)
3. provide the store to the app with a Provider from 'react-redux'
4. created a reducer function that createStore take in as input. it returns the state as an object and it is where he data from no.2 is from. if anything happen, redux call reducer with current state and current action as argument. it will return a new state
5. created a store with createStore(reducer) with 'redux'. 

improved changes:
1.  used combinedReducer to use multiple reducers at once,    todoReducer is combined with combinedReducer at reducer/index
2.  combinedReducer is exported as rootReducer is then used in Store
3.  used thunk as middleware between react and redux store
4.  all of the redux components are seperated inside folder redux/

## JS

1. Spread syntax (...) --> allows iterable such as array expression to be expanded with arguments or in this case is array elements


## ExpressJS
ExpressJS is used as backend along with firebase.
1. installed [express](https://www.npmjs.com/package/express), [cors](https://www.npmjs.com/package/cors) and [firebase CLI](https://firebase.google.com/docs/cli)
2.  create a firebase object with firebase init
3.  express and cors will be imported in foder functions/index.js. All the routes are inside
4.  used atync and await to send request to db and return a response

## Axios
Axios is used to make http request from React
1.  installed [Axios](https://www.npmjs.com/package/axios)
2.  create a new instance of axios with a custom config, http-comon.js
3.  all the services/routes to express is in folder services/todo.services.js as TodoDataServices
4.  these routes is called in action creator before adding to Redux Store (from reducer)