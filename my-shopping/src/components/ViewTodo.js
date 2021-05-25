import React from 'react';
import { connect } from 'react-redux';

class ViewTodo extends React.Component{
    render(){
        return(
            <div class="column">
                <h1> {this.props.values}</h1>
            </div>
        )
    }
}

// it takes the entire redux states and returns object, key -> props namees, value -> props value 
const mapStateToProps = (state) => {
    return {
        values : state.allIds
    }
  }
export default connect(mapStateToProps)(ViewTodo)