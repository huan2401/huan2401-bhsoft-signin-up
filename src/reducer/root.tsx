import { combineReducers } from "redux";
import { UserProfile } from "./user";
import { ArticleReducer } from "./articles";

const rootReducer = combineReducers({
  user: UserProfile,
  articles: ArticleReducer,
});

export default rootReducer;
