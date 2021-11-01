import root from "./reducer/root";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(root, applyMiddleware(thunk));
export default store;
