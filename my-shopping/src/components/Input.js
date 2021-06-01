import React, {useState} from 'react';
import AddTodo from './AddTodo'
import DeleteTodo from './DeleteTodo'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Input = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [input, setInput] = useState('')
  return (
          <div class='columns'>
            <div class="column">
              <textarea class="textarea is-small" placeholder="e.g. Hello world" onChange={(e) => setInput(e.target.value)}></textarea>
            </div>
            <div>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div>
              <AddTodo data={input} date={startDate}/>
              <DeleteTodo data={input} date={startDate}/>
            </div>
            
          </div>
  );
}
export default Input