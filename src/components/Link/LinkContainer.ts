import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Link } from "./Link";
import { setVisibilityFilter, State, Action } from "../../store";
import { VisibilityFilter } from "../../constants";

const mapStateToProps = (state: State, ownProps: Props) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: Props) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export type Props = {
  filter: VisibilityFilter;
};

export const LinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
