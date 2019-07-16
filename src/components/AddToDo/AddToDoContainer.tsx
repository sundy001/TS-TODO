import { AddTodo } from "./AddToDo";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Action, addTodo, State } from "../../store";

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  addTodo: (value: string) => dispatch(addTodo(value))
});

export const AddToDoContainer = connect<
  {},
  ReturnType<typeof mapDispatchToProps>,
  {},
  State
>(
  null,
  mapDispatchToProps
)(AddTodo);
