import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;

const enhancerMiddleWare = applyMiddleware(thunk);

const store = createStore(reducer, composeEnhancers(enhancerMiddleWare));

export default store;