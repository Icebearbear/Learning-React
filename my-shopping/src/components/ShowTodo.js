import { React, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';
import { getTodos } from '../redux/selectors';
import '../css/style.css'
import { showTodo } from '../redux/actions'
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const ShowTodo = ({values, toggleTodo}) => {
    // debugger;
    return (
        <ul>{values && values.length ? 
            values.map(todo => {
                console.log('show ',typeof(todo.date))
                // debugger;
                return(
                    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
                        <div class="title">
                            {/* {time} */}
                        </div>
                         <div class="columns">
                            <div class="column">
                                {todo.completed ? "yes" : "no"  }{" "}                                    
                            </div>
                            <div class = "column">
                                {todo.content}{" "}
                            </div>
                            <div class="column">
                                {todo.date} 
                            </div>      
                         </div>
                    </li>
                ) 
        })
        : "No tasks today"} 
        </ul>
    )
}

const mapStateToProps = (state) => {
    const val2 = getTodos(state)
    return {
        values : state.todoReducer.task
    }
  }
export default connect(mapStateToProps, {toggleTodo})(ShowTodo) 