import { GET_TODO, GET_TODOS, SET_TODO, DELETE_TODO } from "../types";

export const getTodos = () => dispatch => {
  dispatch({ type: GET_TODOS });
};
export const removeTodo = id => dispatch => {
  console.log("action", id);
  dispatch({ type: DELETE_TODO, payload: id });
};

export const setTodo = title => dispatch => {
  dispatch({ type: SET_TODO, payload: title });
};
