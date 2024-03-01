import React, { ReactNode } from 'react';
import { VariantType } from './VariantType';
export declare const ToastContext: React.Context<{
    toasts: Toast[];
    createToast: (message: string, variant: VariantType) => void;
    dismissToast: (id: string) => void;
} | undefined>;
type ToastProviderProps = {
    children: ReactNode;
};
type Toast = {
    id: string;
    message: string;
    variant: VariantType;
};
/**
 * Provides a context for showing and managing toasts.
 * @param children {ReactNode} - The child components to be rendered within the ToastProvider.
 */
declare const ToastProvider: ({ children }: ToastProviderProps) => React.JSX.Element;
export default ToastProvider;
