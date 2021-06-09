import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'bulma/css/bulma.min.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import App from './App'

const Index = () => (
  <Provider store={store}> 
    <App/>
  </Provider>
)

ReactDOM.render(<Index/>,  document.getElementById('root'));


