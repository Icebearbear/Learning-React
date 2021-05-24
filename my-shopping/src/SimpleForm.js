import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.min.css';
import { connect } from 'react-redux'

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
class Tab extends React.Component{
  constructor(props){
    super(props);
    this.state = { input : ''}; // declare state initial value called valueQ to be maintained by component 
  }
  handleChange = (e) => { // event handler
    // set input to the current value
    this.setState({ input: e.target.value}) // re-render when there is a change in valueQ
  }
  onAddItem = () => {
    // dispatch to store 
    this.props.dispatch({ type:"ADD", input:this.state.input})
  }
  // update item with item name input
  onUpdateItem = () => {
    this.props.dispatch({ type:"UPDATE", input:this.state.input})
  }
  // delete item with item name input
  onDeleteItem=()=>{
    this.props.dispatch({ type:"DELETE", input:this.state.input})
  } 
  // reset data
  onResetItem=()=>{
    this.props.dispatch({ type:"RESET", input:this.state.input})
  } 
  render(){
    return(
      <div>
        <div class="columns">
          <div class="column">
            <textarea class="textarea is-small" placeholder="e.g. Hello world" onChange={this.handleChange}></textarea>
          </div>
          <div class="column">
            <div class="buttons">
            <button class="button is-info" onClick= {this.onAddItem}>Add</button>
            <button class="button is-success"  onClick= {this.onUpdateItem}>Make Her Beautiful</button>
            <button class="button is-warning"  onClick= {this.onDeleteItem}>Delete</button>
            <button class="button is-danger"  onClick= {this.onResetItem}>Reset</button>
            </div>
          </div>  
        </div>
          <Info value={this.props.valueQ}/>   
      </div>
    )
  }
}

// it takes the entire redux states and returns object, key -> props namees, value -> props value 
const mapStateToProps = (state) => ({
  valueQ : state.valueQ
})

//returns a connected component to the store. it returns a dispatch function
export default connect(mapStateToProps)(Tab)