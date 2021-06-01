import React from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../redux/selectors';

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class ViewTodo extends React.Component{

    showData(){

        return (
            <h1> {this.props.values.map(todo => <div>{todo.content}</div>)}</h1>
        )
    }
    render(){
        return(
            
            <div class="column">
                <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span>Sort by</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div class="dropdown-content">
                        <div class="dropdown-item">
                        <a href="#" class="dropdown-item">
                            Day
                        </a>
                        <a href="#" class="dropdown-item">
                            Week
                        </a>
                        <a href="#" class="dropdown-item">
                            Month
                        </a>
                        </div>
                        </div>
                    </div>
                </div>
                
                <ul>{this.props.values && this.props.values.length ? 
                <ul> {this.props.values.map(todo => 
                    <div>
                        <div class="columns">
                            <div class="column">
                                <div>{todo.content}</div>
                            </div>
                            <div class="column">
                                <div>{todo.date.getDate()} {months[todo.date.getMonth()]} {todo.date.getFullYear()}</div>
                            </div>
                        </div>
                    </div>
                )}</ul>
                : "No tasks today"}</ul>
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