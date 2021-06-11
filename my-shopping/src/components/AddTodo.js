import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions'
import Input from '../components/Input'

class AddTodo extends React.Component{
      onAddItem = () => {
        // const addedDate = Date.now()
        // pass to action creator, props from Input component
        this.props.addTodo(this.props.data,this.props.targetDate,this.props.addedDate)
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