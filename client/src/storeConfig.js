import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer as reducer} from "./store/reducers";

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
));

store.subscribe(() => {
  console.log('subscribe', store.getState())
  // todo: save Redux to localStore ?add throttle
});

export { store };
