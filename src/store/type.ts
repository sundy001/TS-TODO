import { VisibilityFilter } from "../constants";
import { Action } from "./actions";

export type State = Readonly<{
  todos: readonly TodoItem[];
  visibilityFilter: VisibilityFilter;
}>;

export type TodoItem = Readonly<{
  id: number;
  text: string;
  completed: boolean;
}>;

export type Reducer<S> = (state: S | undefined, action: Action) => S;
