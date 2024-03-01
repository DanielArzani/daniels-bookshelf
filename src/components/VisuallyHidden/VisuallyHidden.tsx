import React from 'react';

import styles from './VisuallyHidden.module.css';

type VisuallyHiddenProps = {
  children: React.ReactNode;
  className?: string;
  element?: React.ElementType; // Use React.ElementType for flexibility
} & React.HTMLAttributes<HTMLElement>; // Changed to HTMLElement for a more generic type

/**
 * Renders content that remains visually hidden to users but accessible to screen readers,
 * unless a specific key is pressed, making it visible for debugging purposes in development.
 *
 * @param children The content to be visually hidden.
 * @param className An optional CSS class to apply to the wrapper element for additional styling.
 * @param element The element type to render, defaults to "span".
 * @param delegated Additional props spread over the element for further HTML attribute extension.
 */
const VisuallyHidden = ({
  children,
  className = '',
  element: Component = 'span', // Default component rendered as 'span' but can be overridden.
  ...delegated
}: VisuallyHiddenProps) => {
  const [forceShow, setForceShow] = React.useState(false); // State to control visibility for debugging.

  React.useEffect(() => {
    // This effect toggles visibility based on key presses, intended for use in non-production environments.
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev: KeyboardEvent) => {
        // Enables visibility when the 'Alt' key is pressed.
        if (ev.key === 'Alt') {
          setForceShow(true);
        }
      };

      const handleKeyUp = () => {
        // Disables visibility when any key is released.
        setForceShow(false);
      };

      // Event listeners for key down and up to control the visibility.
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      // Cleanup function to remove event listeners on component unmount.
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, []);

  // Conditional rendering based on `forceShow` state to toggle between hidden and visible states.
  return forceShow ? (
    // Renders children in a wrapper with a class for visible state.
    <Component className={styles.showWrapper}>{children}</Component>
  ) : (
    // Default rendering with children in a visually hidden wrapper, applying any additional className and delegated props.
    <Component className={`${className} ${styles.wrapper}`} {...delegated}>
      {children}
    </Component>
  );
};

export default VisuallyHidden;
