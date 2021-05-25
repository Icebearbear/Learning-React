import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actions'

class DeleteTodo extends React.Component{
    onDeleteItem = () => {
        // pass to action creator
        this.props.deleteTodo(this.props.data)
      }
    render(){
        return (
        <div className="delete_todo">
            <button class="button is-info"  onClick= {this.onDeleteItem}>Delete</button>
        </div>
        )}
}

export default connect(null, {deleteTodo})(DeleteTodo)