import { React, useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { showTodo, toggleTodo } from '../redux/actions';
import { getTodos } from '../redux/selectors';
import FilterData from './FilterData'
import '../css/style.css'
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// class ViewTodo extends React.Component{
    const ViewTodo = ({showTodo,values, toggleTodo}) => {
        const [time, setTime] = useState('day')

        // triggered after every render, [] is to make it run only once
        useEffect(()=> showTodo(), [])

        //calculate percentage of finished task
        function progressValue(values){
            const arrNo = 100/values.length
            const notDoneNo = values.filter(todo => todo.completed === true).length
            return 0 + Math.round((notDoneNo*arrNo) * 10) / 10
        }
        
        return(
            <div class="column">
                <progress class="progress is-primary is-medium show-value" value={progressValue(values)} max="100"></progress>

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
                                <a class="dropdown-item" id="day" value="day" onClick={() => setTime('day')}>
                                    Day
                                </a>
                                <a class="dropdown-item" onClick={() => setTime('week')}>
                                    Week
                                </a>
                                <a class="dropdown-item" onClick={() => setTime('month')}>
                                    Month
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <FilterData time={time}/>
                </div>
                </div>
                )
        }

// it takes the entire redux states and returns object, key -> props namees, value -> props value 
const mapStateToProps = (state) => {
    const val2 = getTodos(state)
    return {
        values : state.todoReducer.task
    }
  }
export default connect(mapStateToProps, {toggleTodo, showTodo})(ViewTodo)