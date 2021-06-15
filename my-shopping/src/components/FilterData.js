import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const FilterData = ({values,time, toggleTodo}) => {
    var filteredData = []

    const sortData = () => {
        var row = values && values.length ?
            values.map(todo => {
                // debugger;
                var ind = ""
                const date = new Date(todo.targetDate).getDate() // convert string into Date
                const month = new Date(todo.targetDate).getMonth() // convert string into Date
                const day = new Date(todo.targetDate).getDay() // convert string into Date
                if(time === "day") {ind = month.toString() + day.toString()} // unique index for day filter using day+month 
                // if(time === "week") {ind = month.toString()} 
                if(time === "month") {ind = month.toString()} // unique key for month filter using month number 

                if(!filteredData[ind]){
                    filteredData[ind] = [todo] //create new array
                } 
                else { filteredData[ind].push(todo)} // if index existed, push data into array
            }) : "no"
    }

    const showData = () => {
        return(
            <div>
                {filteredData.map((items, index) => {
                    // debugger;
                    return (
                    <ol>
                        {/* {showTime} */}
                        <h1>{showTime(new Date(items[0].targetDate).getDate())} {new Date(items[0].targetDate).getMonth()} {new Date(items[0].targetDate).getFullYear()}</h1>
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

    const showTime = (ind) => {
        // debugger;
        if(time === "day"){
            return ind
        }
        // if(time === "week"){
        //     source = weekFilter()
        // }
        if(time === "month"){
            return ""
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