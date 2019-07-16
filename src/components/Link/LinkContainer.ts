import { connect } from "react-redux";
import { Link } from "./Link";
import { State, setVisibilityFilter, Action } from "../../store";
import { VisibilityFilter } from "../../constants";
import { Dispatch } from "react";

const mapStateToProps = (state: State, ownProps: Props) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: Props) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export type Props = {
  filter: VisibilityFilter;
};

export const LinkContainer = connect<
  ReturnType<typeof mapStateToProps>,
  ReturnType<typeof mapDispatchToProps>,
  Props,
  State
>(
  mapStateToProps,
  mapDispatchToProps
)(Link);
