import { AddTodo } from "./AddToDo";
import { connect } from "react-redux";
import { addTodo } from "../../store";

const mapDispatchToProps = dispatch => ({
  addTodo: value => dispatch(addTodo(value))
});

export const AddToDoContainer = connect(
  null,
  mapDispatchToProps
)(AddTodo);
