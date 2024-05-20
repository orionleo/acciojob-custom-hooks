import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(newValue) {
    setValue((currentValue) =>
      typeof newValue === "boolean" ? newValue : !currentValue
    );
  }
  return [value, toggleValue];
};

export default useToggle;
