import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Info component is a controlled components
 class Info extends React.Component{
  render(){
    return(
      <div>
      <ol> 
        {this.props.value.map((item, index) => {
        return <li key={`${index}${item}`}>{item}</li> // set item and index as key
      })}
      </ol>
      </div>
    )
  }
}

class Tab extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      valueQ : ['Sally', 'Icebear']}; // declare state initial value called valueQ to be maintained by component 
    // this.handleChange = this.handleChange.bind(this); // bind(this) is to pass this and retain its value as instances of component
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => { // event handler
    // set input to the current value
    this.setState({ input: e.target.value}) // re-render when there is a change in valueQ
  }
  handleSubmit = () => {
    // alert('submit' + this.state.valueQ)

    // concat input into valueQ, it will create new array for immutability
    // setState the newest valueQ, it is a async means the state is not updated instantly
    // use snapshot of previous state to create a new state to combine diff state tgt
    // and to avoid side effect of async
    this.setState(prevState => ({valueQ: this.state.valueQ.concat(this.state.input)}))
  }
  
  render(){
    return(
      <div>
          <label>
            Item:
            <textarea type="text" onChange={this.handleChange}></textarea>
          </label>
          <button onClick= {this.handleSubmit}>
            submit
          </button>

          <Info value={this.state.valueQ}/>    
      </div>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Tab />
  </React.StrictMode>,
  document.getElementById('root')
);


