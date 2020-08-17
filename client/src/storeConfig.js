import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer as reducer} from "./store/reducers";

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export { store };
