import { Reducer, State } from "../type";
import { VISIBILIT_FILTER } from "../../constants";

export const visibilityFilter: Reducer<State["visibilityFilter"]> = (
  state = VISIBILIT_FILTER.SHOW_ALL,
  action
) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;

    default:
      return state;
  }
};
