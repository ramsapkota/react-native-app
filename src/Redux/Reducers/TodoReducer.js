import { GET_TODO, GET_TODOS, SET_TODO, DELETE_TODO } from "../types";
import shortid from "shortid";
import findIndex from "lodash/findIndex";

const initialState = {
  todos: [{ id: 1, title: "adsfs" }]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return state;
    case SET_TODO:
      const t = [
        ...state.todos,
        {
          id: shortid.generate(),
          todoTitle: action.payload,
          date: new Date().toISOString()
        }
      ];
      return {
        todos: [...state.todos, t]
      };
    case DELETE_TODO:
      const _state = state.todos;
      console.log(action.payload);
      const index = findIndex(_state, { id: action.payload });
      if (index >= 0) {
        const filtered = [
          ..._state.slice(0, index),
          ..._state.slice(index + 1)
        ];
        return {
          ...state,
          todos: filtered
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
