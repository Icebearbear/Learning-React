import React from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../redux/selectors';

class ViewTodo extends React.Component{

    showData(){

        return (
            <h1> {this.props.values.map(todo => <div>{todo.content}</div>)}</h1>
        )
    }
    render(){
        return(
            <div class="column">
                <h1>{this.props.values && this.props.values.length ? 
                <h1> {this.props.values.map(todo => <div>{todo.content}</div>)}</h1>

                // this.showData(this.props.values)
                : "No tasks today"}</h1>
            </div>
        )
    }
}

// it takes the entire redux states and returns object, key -> props namees, value -> props value 
const mapStateToProps = (state) => {
    const val2 = getTodos(state)
    return {
        values : state.task
    }
  }
export default connect(mapStateToProps)(ViewTodo)