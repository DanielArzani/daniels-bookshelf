import { useEffect, useState } from 'react';

/**
 * Custom hook to interact with the browser's localStorage.
 * It allows storing a value under a specified key and automatically updates
 * this value in the localStorage when it changes.
 *
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {T | (() => T)} initialValue - The initial value to be stored, or a function that returns it.
 * @returns {[T, typeof setValue]} - Returns the current value and a function to update it.
 */
function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [value, setValue] = useState<T>(() => {
    // Get from local storage by key
    const jsonValue = localStorage.getItem(key);

    // Parse and return stored json or, if null, return initialValue
    if (jsonValue == null) {
      // Check if initialValue is a function and execute it to get the actual value
      if (typeof initialValue === 'function') {
        return (initialValue as () => T)();
      } else {
        // Otherwise, just return the initialValue directly
        return initialValue;
      }
    } else {
      // If value exists in localStorage, parse it from JSON string back into JS object/value
      return JSON.parse(jsonValue);
    }
  });

  // Use useEffect to update localStorage when value changes
  useEffect(() => {
    // Set item to localStorage on value change
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]); // Dependencies array: only re-run effect if value or key changes

  // Return the current state and a function to update it
  return [value, setValue] as [T, typeof setValue];
}

export default useLocalStorage;
