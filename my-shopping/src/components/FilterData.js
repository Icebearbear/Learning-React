import {React, useEffect}from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';
import moment from 'moment'
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const FilterData = ({values,time, toggleTodo}) => {
    var filteredData = []

    const sortData = () => {
        var row = values && values.length ?
            values.map(todo => {
                const tDate = new Date(todo.targetDate)
                var ind = ""
                const date = tDate.getDate() // convert string into Date
                const month = tDate.getMonth() // convert string into Date
                const day = tDate.getDay() // convert string into Date
                if(time === "day") {ind = month.toString() + day.toString()} // unique index for day filter using day+month 
                if(time === "week") {ind = `${moment(tDate).year()}${moment(tDate).week()}`} //unique index for week using number of week
                if(time === "month") {ind = month.toString()} // unique key for month filter using month number 

                if(!filteredData[ind]){
                    filteredData[ind] = [todo] //create new array
                } 
                else { filteredData[ind].push(todo)} // if index existed, push data into array
            }) : "no data"
    }

    const showData = () => {
        return(
            <div>
                {filteredData.map((items, index) => {

                    return (
                    <ol>
                        {showTime(items,index)}
                        {items.map((subItems, sIndex) => {
                            const date = new Date(subItems.targetDate) // convert string into Date
                            return (
                                <li className="todo-item" onClick={() => toggleTodo(subItems.id, subItems)}>
                                
                                <div class="columns">
                                    <div class="column">
                                        {subItems.completed ? "yes" : "no"  }{" "}                                    
                                    </div>
                                    <div class = "column">
                                        {subItems.content}{" "}
                                    </div>
                                    <div class="column">
                                        {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}
                                    </div>      
                                </div>
                            </li>
                            )
                        })}
                    </ol>
                    );
                })}
            </div>    
        )
    }

    const showTime = (items,index) => {
        const date = new Date(items[0].targetDate)
        if(time === "day"){
            return <h1>{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</h1>
        }
        if(time === "week"){
            const now = new Date()
            const thisWeek = parseInt(`${moment(now).year()}${moment(now).week()}`)

            if(index === thisWeek){
                return <h1>This Week</h1>
            }
            else{
                const noWeek = index-thisWeek // get the week difference from this week
                if(noWeek>4){ // show in Months if it is more than 4 weeks
                    return <h1>{Math.floor(noWeek/4)} Months Later</h1> 
                }
                else{
                    return <h1>{noWeek} Week Later</h1>}
                }
        }
        if(time === "month"){
            return <h1>{months[date.getMonth()]} {date.getFullYear()}</h1>
        }
    }

    return(
        <div>
            <div>{time}</div>
            <div>
                {sortData()}
                {showData()}
            </div>
        </div>
    )
}

// it takes the entire redux states and returns object, key -> props namees, value -> props value 
const mapStateToProps = (state) => {
    // const val2 = getTodos(state)
    return {
        values : state.todoReducer.task
    }
  }
export default connect(mapStateToProps, {toggleTodo})(FilterData)