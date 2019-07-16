import { connect } from "react-redux";
import { TodoList } from "./TodoList";
import { State, TodoItem, Action, toggleTodo } from "../../store";
import { VisibilityFilter, VISIBILIT_FILTER } from "../../constants";
import { Dispatch } from "react";

const getVisibleTodos = (
  todos: readonly TodoItem[],
  filter: VisibilityFilter
) => {
  switch (filter) {
    case VISIBILIT_FILTER.SHOW_ALL:
      return todos;
    case VISIBILIT_FILTER.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VISIBILIT_FILTER.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state: State) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))
});

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
