import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer"
import thunk from "redux-thunk";
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose


const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;