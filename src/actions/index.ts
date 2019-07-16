import { VisibilityFilters } from "../reducers";
import { createAction } from "../createAction";

let nextTodoId = 0;

export const addTodo = createAction("ADD_TODO", (text: string) => ({
  id: nextTodoId++,
  text
}));

export const setVisibilityFilter = 
  "SET_VISIBILITY_FILTER",
  (filter: VisibilityFilters) => ({
    filter
  })
);

export const toggleTodo = (id: number) => ({
  type: "TOGGLE_TODO",
  id
}) as const;
