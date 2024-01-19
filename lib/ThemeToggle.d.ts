import React from 'react';
export type AvailableThemesType = 'light' | 'dark';
type ThemeToggleProps = {
    onChange: (value: AvailableThemesType) => void;
    theme: AvailableThemesType;
};
/**
 * Switch for toggling between light and dark mode
 * @param onChange - Function for toggling the theme
 */
declare function ThemeToggle({ theme, onChange }: ThemeToggleProps): React.JSX.Element;
export default ThemeToggle;
