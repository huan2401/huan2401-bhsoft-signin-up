import { combineReducers } from "redux";
import { UserProfile } from "./user";

const rootReducer = combineReducers({
  user: UserProfile,
});

export default rootReducer;
