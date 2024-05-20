
import { useState } from "react";
import { useEffect } from "react";
import useThrottle from "../customHooks/useThrottle";

const UseThrottle = () => {
  const [input, setInput] = useState("");
  const throttledValue = useThrottle(input);

  useEffect(() => {
    console.log("Throttled value change");
  }, [throttledValue]);

  return (
    <div>
      Input:{" "}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Throttled Value: {throttledValue}</p>
    </div>
  );
};

export default UseThrottle;
