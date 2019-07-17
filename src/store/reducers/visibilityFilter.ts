import { VISIBILIT_FILTER } from "../../constants";
import { State } from "../type";
import { Action } from "../actions";
import { Reducer } from "../../types";

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
