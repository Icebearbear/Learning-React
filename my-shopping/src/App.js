import React from "react";
import Input from './components/Input'
import ViewTodo from './components/ViewTodo'
import NavigationBar from './components/NavigationBar'

class App extends React.Component{
    render(){
        return(
            <div>
                <NavigationBar/>
            </div>
        )
    }
}

export default App