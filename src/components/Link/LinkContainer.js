import { connect } from "react-redux";
import { Link } from "./Link";
import { setVisibilityFilter } from "../../store";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export const LinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
