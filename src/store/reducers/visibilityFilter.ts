import { State } from "../type";
import { VISIBILIT_FILTER } from "../../constants";
import { Reducer } from "../../types";
import { Action } from "../actions";

export const visibilityFilter: Reducer<State["visibilityFilter"], Action> = (
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
