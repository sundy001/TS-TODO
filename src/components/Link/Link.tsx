import React, { FC, MouseEventHandler, ReactNode } from "react";

export const Link: FC<Props> = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: "4px"
    }}
  >
    {children}
  </button>
);

export type Props = {
  active: boolean;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
