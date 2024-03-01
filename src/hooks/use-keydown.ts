import React from 'react';

/**
 * Callback function will be invoked on keydown press
 * @param key - The `KeyboardEvent.code` value of the key to listen for.
 * @param callback - The function to execute when the specified key is pressed.
 */
function useKeydown(
  key: string,
  callback: (event: KeyboardEvent) => void
): void {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === key) {
        callback(event);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup to remove the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback]);
}

export default useKeydown;
