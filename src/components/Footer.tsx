import React, { FC } from "react";
import { Link } from "./Link";
import { VISIBILIT_FILTER } from "../constants";

export const Footer: FC<{}> = () => (
  <div>
    <span>Show: </span>
    <Link filter={VISIBILIT_FILTER.SHOW_ALL}>All</Link>
    <Link filter={VISIBILIT_FILTER.SHOW_ACTIVE}>Active</Link>
    <Link filter={VISIBILIT_FILTER.SHOW_COMPLETED}>Completed</Link>
  </div>
);
