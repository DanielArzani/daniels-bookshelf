/// <reference types="react" />
/**
 * Custom hook to interact with the browser's localStorage.
 * It allows storing a value under a specified key and automatically updates
 * this value in the localStorage when it changes.
 *
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {T | (() => T)} initialValue - The initial value to be stored, or a function that returns it.
 * @returns {[T, typeof setValue]} - Returns the current value and a function to update it.
 */
declare function useLocalStorage<T>(key: string, initialValue: T | (() => T)): [T, import("react").Dispatch<import("react").SetStateAction<T>>];
export default useLocalStorage;
