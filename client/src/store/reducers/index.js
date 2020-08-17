import {combineReducers} from "redux";

import {userReducer as user} from "./userReducer";
import {appReducer as app} from "./appReducer";

const rootReducer = combineReducers({
  app,
  user,
});

export { rootReducer };
