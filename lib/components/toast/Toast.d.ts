import React from 'react';
import { VariantType } from './VariantType';
type ToastProps = {
    id: string;
    variant: VariantType;
    children: React.ReactNode;
};
/**
 * Displays a toast message with an icon, content, and a dismiss button.
 * @param id {string} - Unique identifier for the toast message.
 * @param variant {VariantType} - Type of the toast message which influences the icon and styling.
 * @param children {React.ReactNode} - The content of the toast message.
 */
declare const Toast: React.FunctionComponent<ToastProps>;
export default Toast;
