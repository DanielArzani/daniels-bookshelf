import React, { ReactNode, useState, useCallback } from 'react';

import { VariantType } from './VariantType';

import useKeydown from '../../hooks/use-keydown';

export const ToastContext = React.createContext<
  | {
      toasts: Toast[];
      createToast: (message: string, variant: VariantType) => void;
      dismissToast: (id: string) => void;
    }
  | undefined
>(undefined);

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
const ToastProvider = ({ children }: ToastProviderProps) => {
  // State to store the toasts, initialized with two example toasts
  const [toasts, setToasts] = useState<Toast[]>([
    {
      id: crypto.randomUUID(),
      message: 'It works!',
      variant: 'success',
    },
    {
      id: crypto.randomUUID(),
      message: 'Logged in',
      variant: 'success',
    },
  ]);

  // Callback to clear all toasts, triggered on 'Escape' key press
  const handleEscape = useCallback(() => {
    setToasts([]);
  }, []);

  // Hook to listen for the 'Escape' key and clear toasts
  useKeydown('Escape', handleEscape);

  /**
   * Creates a new toast message.
   * @param message {string} - The message to be displayed in the toast.
   * @param variant {ToastVariant} - The variant of the toast, determining its style.
   */
  function createToast(message: string, variant: VariantType) {
    const nextToasts = [
      ...toasts,
      { id: crypto.randomUUID(), message, variant },
    ];
    setToasts(nextToasts);
  }

  /**
   * Dismisses a toast by its ID.
   * @param id {string} - The ID of the toast to dismiss.
   */
  function dismissToast(id: string) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  // Context provider to pass down the toasts and toast management functions
  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
