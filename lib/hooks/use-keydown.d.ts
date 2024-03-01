/**
 * Callback function will be invoked on keydown press
 * @param key - The `KeyboardEvent.code` value of the key to listen for.
 * @param callback - The function to execute when the specified key is pressed.
 */
declare function useKeydown(key: string, callback: (event: KeyboardEvent) => void): void;
export default useKeydown;
