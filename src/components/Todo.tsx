import React, { FC, MouseEventHandler } from "react";

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
  text: string;
  completed: boolean;
};
