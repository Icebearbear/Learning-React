import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';

const INITIAL_LIST = ['Sally', 'Icebear']
// Info component is a controlled components
 class Info extends React.Component{
  render(){
    return(
      <div>
      <ol> 
        {this.props.value.map((item, index) => {
          return <li key={`${item}`}>{item}</li> // set item and index as key
      })}
      </ol>
      </div>
    )
  }
}

function Add(props){
  return(
    <button class="button is-info" onClick= {props.onClick}>Add</button>
    )}
function Update(props){
  return(
    
      <button class="button is-success"  onClick= {props.onClick}>Make Her Beautiful</button>
    )}
function Delete(props){
  return(
    
  <button class="button is-warning"  onClick= {props.onClick}>Delete</button>
  )}
function Reset(props){
  return(
    
  <button class="button is-danger"  onClick= {props.onClick}>Reset</button>
  )}

class Tab extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      valueQ : INITIAL_LIST}; // declare state initial value called valueQ to be maintained by component 
    // this.handleChange = this.handleChange.bind(this); // bind(this) is to pass this and retain its value as instances of component
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => { // event handler
    // set input to the current value
    this.setState({ input: e.target.value}) // re-render when there is a change in valueQ
  }
  onAddItem = () => {
    // concat input into valueQ, it will create new array for immutability
    // setState the newest valueQ, it is a async means the state is not updated instantly
    // use snapshot of previous state to create a new state to combine diff state tgt
    // and to avoid side effect of async
    this.setState(prevState => ({valueQ: this.state.valueQ.concat(this.state.input)}))
  }
  // update item with item name input
  onUpdateItem = () => {
    const list = this.state.valueQ.map(j => {
      if(j === this.state.input){
        return j + ' Beautiful'  
      }
      else{ return j }
    })
    this.setState(prevState => ({valueQ:list}))
  }
  // delete item with item name input
  onDeleteItem=()=>{
    const list = this.state.valueQ.filter((item => item !== this.state.input))
    this.setState(prevState => ({valueQ: list}))
  } 
  // reset data
  onResetItem=()=>{
    this.setState({valueQ: INITIAL_LIST})
  } 
  render(){
    return(
      <div>
        <div class="columns">
          <div class="column">
            <textarea class="textarea is-small" placeholder="e.g. Hello world" onChange={this.handleChange}></textarea>
          </div>
          <div class="column">
            {/* splitting the elements into components */}
            <div class="buttons">
            <Add onClick={() => this.onAddItem()}/>
            <Update onClick={() => this.onUpdateItem()}/>
            <Delete onClick={() => this.onDeleteItem()}/>
            <Reset onClick={() => this.onResetItem()}/>
            </div>
          </div>  
        </div>
          <Info value={this.state.valueQ}/>   
      </div>
    )
  }
}

export default Tab