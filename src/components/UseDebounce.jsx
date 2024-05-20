/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import useDebounce from "../customHooks/useDebounce";
import { useCallback } from "react";

function UseDebounce() {
  const [input, setInput] = useState("");
  const debouncedValue = useDebounce(input, 500);

  const apiFunction = useCallback(async () => {
    //API CALLS HAPPENING
    console.log("API CALLED");
  }, [debouncedValue]);

  useEffect(() => {
    if (input.length > 0) apiFunction();
  }, [debouncedValue]);
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default UseDebounce;
