import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Info extends React.Component{
  render(){
    return(
      <h1>{this.props.value}</h1>
    )
  }
}
class Tab extends React.Component{
  constructor(props){
    super(props);
    this.state = { valueQ : ''}; // declare state initial value called valueQ to be maintained by component 
    this.handleChange = this.handleChange.bind(this); // bind(this) is to pass this and retain its value as instances of component
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){ // event handler
    this.setState({valueQ: event.target.value}) // re-render when there is a change in valueQ
  }
  handleSubmit(){
    alert('submitted ' + this.state.valueQ)
  }
  
  render(){
    return(
      <div>
          <label>
            Item:
            <textarea type="text" value={this.state.valueQ} onChange={this.handleChange}></textarea>
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


