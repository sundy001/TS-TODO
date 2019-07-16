import React, { FC, MouseEventHandler } from "react";
import { TodoItem } from "../store";

export const Todo: FC<Props> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
      cursor: "pointer"
    }}
  >
    {text}
  </li>
);

type Props = {
  onClick: MouseEventHandler<HTMLLIElement>;
} & TodoItem;
