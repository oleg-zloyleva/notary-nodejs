import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer as reducer} from "./store/reducers";
import {saveState} from "./helpers";

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
));

store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});

export { store };
