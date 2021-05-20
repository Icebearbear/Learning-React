# Learning-React

## Running

1. go to path directory
2. npm start

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
