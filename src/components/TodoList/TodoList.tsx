import React, { FC } from "react";
import { Todo } from "../Todo";
import { TodoItem } from "../../store";

export const TodoList: FC<Props> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export type Props = {
  todos: readonly TodoItem[];
  toggleTodo: (id: number) => void;
};
