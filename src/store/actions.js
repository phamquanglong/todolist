import { SET_TODOS, ADD_TODOS, DELETE_TODOS } from "./constains";

export const setTodos = (data) => ({
  type: SET_TODOS,
  payload: data,
});

export const addTodos = (data) => ({
  type: ADD_TODOS,
  payload: data,
});

export const deleteTodos = (data) => ({
  type: DELETE_TODOS,
  payload: data,
});
