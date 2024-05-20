import React from "react";
import useLocaleStorageExpiry from "../customHooks/useLocaleStorageExpiry";

function UseLocalStorage() {
  const [input, setInput] = useLocaleStorageExpiry("", "name", 0.1);

  return <div>
    <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
  </div>;
}

export default UseLocalStorage;
