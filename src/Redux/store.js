import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import todoReducer from "./Reducers/TodoReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  todos: todoReducer
});

const enhancer = applyMiddleware(...middleware);
const store = createStore(reducers, initialState, enhancer);

export default store;
