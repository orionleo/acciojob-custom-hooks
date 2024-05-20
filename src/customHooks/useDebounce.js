import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function useDebounce(value, delay = 1000) {
  const [debouncedValue, setDebouncedValue] = useState("");
  const timerRef = useRef();

  useEffect(() => {
    // console.log("Debounce called");
    timerRef.current = setTimeout(()=>setDebouncedValue(value),delay);

    return ()=>{
        clearTimeout(timerRef.current);
    }
  }, [value, delay]);

  return debouncedValue;
}
