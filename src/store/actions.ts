import { VisibilityFilter } from "../constants";

let nextTodoId = 0;

export const addTodo = (text: string) =>
  ({
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  } as const);

export const setVisibilityFilter = (filter: VisibilityFilter) =>
  ({
    type: "SET_VISIBILITY_FILTER",
    filter
  } as const);

export const toggleTodo = (id: number) =>
  ({
    type: "TOGGLE_TODO",
    id
  } as const);

export type Action =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof setVisibilityFilter>
  | ReturnType<typeof toggleTodo>;
