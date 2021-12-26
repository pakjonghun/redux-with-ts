import React, { useCallback, useState } from "react";
import { useAction } from "./hooks/useAction";
import { useSelectorTyped } from "./hooks/useSelectorType";
const Demo = () => {
  const [value, setValue] = useState<string>("");
  const { search } = useAction();

  const onSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      search(value);
      setValue(value);
    },
    [search, value]
  );

  useSelectorTyped((state) => console.log(state.repository));

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        type="text"
        placeholder="insert"
      />
      <button type="submit">send</button>
    </form>
  );
};

export default Demo;
