import root from "./reducer/root";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));
export default store;
