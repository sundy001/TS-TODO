import React, { useRef } from "react";

export const AddTodo: React.SFC<Props> = ({ addTodo }) => {
  const inputRef = useRef<HTMLInputElement>();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          const input = inputRef.current;
          if (!input.value.trim()) {
            return;
          }
          addTodo(input.value);
          input.value = "";
        }}
      >
        <input ref={inputRef} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

// export type Props = ReturnType<typeof mapDispatchToProps>;
export type Props = any;
