import { VisibilityFilter } from "../constants";

export type State = Readonly<{
  todos: readonly TodoItem[];
  visibilityFilter: VisibilityFilter;
}>;

export type TodoItem = Readonly<{
  id: number;
  text: string;
  completed: boolean;
}>;
