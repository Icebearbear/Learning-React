import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions'
import Input from '../components/Input'
class AddTodo extends React.Component{
      onAddItem = () => {
        // pass to action creator
        this.props.addTodo(this.props.data)
        this.setState({input:" "})
      }
    render(){
        return(
            <div>
           <div class="column"> 
            <button class="button is-info" onClick= {this.onAddItem}>Add</button>
            </div>
            </div>
        )
    }
}



// mapDispatchToProps --> addTodo. it is an object full of action creator 
// it will turn into prop function that automatically dispatches its action when called 
export default connect(null, {addTodo})(AddTodo) 