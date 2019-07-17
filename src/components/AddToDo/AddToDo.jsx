import React, { useRef } from "react";

export const AddTodo = ({ addTodo }) => {
  const inputRef = useRef(null);

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
