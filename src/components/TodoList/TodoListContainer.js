import { connect } from "react-redux";
import { TodoList } from "./TodoList";
import { toggleTodo } from "../../store";
import { VISIBILIT_FILTER } from "../../constants";

const getVisibleTodos = (todos, filter) => {
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

const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos: getVisibleTodos(todos, visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
