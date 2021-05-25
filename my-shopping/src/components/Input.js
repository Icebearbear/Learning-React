import React from 'react';
import AddTodo from './AddTodo'
import DeleteTodo from './DeleteTodo'

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = { input : ''}; // declare state initial value called valueQ to be maintained by component 
      }
      handleChange = (e) => { // event handler
        // set input to the current value
        this.setState({ input: e.target.value}) // re-render when there is a change in valueQ
      }
    render(){
        return (
            <div class='columns'>
            <div class="column">
            <textarea class="textarea is-small" placeholder="e.g. Hello world" onChange={this.handleChange}></textarea>
          </div>
          <div class="coluumn">
              <AddTodo data={this.state.input}/>
              <DeleteTodo data={this.state.input}/>
          </div>
          </div>
        )
    }
}

export default Input