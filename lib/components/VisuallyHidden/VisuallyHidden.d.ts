import React from 'react';
type VisuallyHiddenProps = {
    children: React.ReactNode;
    className?: string;
    element?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>;
/**
 * Renders content that remains visually hidden to users but accessible to screen readers,
 * unless a specific key is pressed, making it visible for debugging purposes in development.
 *
 * @param children The content to be visually hidden.
 * @param className An optional CSS class to apply to the wrapper element for additional styling.
 * @param element The element type to render, defaults to "span".
 * @param delegated Additional props spread over the element for further HTML attribute extension.
 */
declare const VisuallyHidden: ({ children, className, element: Component, ...delegated }: VisuallyHiddenProps) => React.JSX.Element;
export default VisuallyHidden;
