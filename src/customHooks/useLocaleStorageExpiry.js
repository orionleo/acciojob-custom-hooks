import { useEffect } from "react";
import { useState } from "react";

function useLocaleStorageExpiry(initialValue, key, expiryInMinutes) {
  const storedValueJson = localStorage.getItem(key);
  const now = Date.now();
  console.log(initialValue === "");
  let initialStoredValue = initialValue === "" ? null : initialValue;

  if (storedValueJson) {
    const { value, expiry } = JSON.parse(storedValueJson);
    if (now < expiry) {
      initialStoredValue = value;
    }
  }

  const [storedValue, setStoredValue] = useState(initialStoredValue);

  useEffect(() => {
    if (storedValue === null || storedValue === "") {
      localStorage.removeItem(key);
    } else {
      const expiry = new Date().getTime() + expiryInMinutes * 60 * 1000;
      localStorage.setItem(key, JSON.stringify({ value: storedValue, expiry }));
    }
  }, [key, storedValue, expiryInMinutes]);

  return [storedValue, setStoredValue];
}

export default useLocaleStorageExpiry;
