import { createStore ,applyMiddleware } from 'redux';
import { compositeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import todoReducer from './reducers/todoReducer'

// store
const middleWare = [thunk];
const store = createStore(
  rootReducer,
  applyMiddleware(...middleWare)
  );

export default store