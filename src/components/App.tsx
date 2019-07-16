import * as React from "react";
import { Footer } from "./Footer";
import { AddToDo } from "./AddTodo";
import { TodoList } from "./TodoList";

export const App = () => (
  <div>
    <AddToDo />
    <TodoList />
    <Footer />
  </div>
);
