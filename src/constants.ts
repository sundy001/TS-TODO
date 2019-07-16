import { Enum } from "./types";

export const VISIBILIT_FILTER = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
} as const;

export type VisibilityFilter = Enum<typeof VISIBILIT_FILTER>;
