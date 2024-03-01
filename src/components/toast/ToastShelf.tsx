import React, { useContext } from 'react';
import { ToastContext } from './ToastProvider';
import Toast from './Toast';

import { VariantType } from './VariantType';
import styles from './ToastShelf.module.css';

// Assuming the ToastContext is correctly typed, otherwise, you'll need to define or import these types
type ToastType = {
  id: string;
  message: string;
  variant: VariantType;
};

/**
 * Displays a list of toast notifications.
 */
const ToastShelf: React.FunctionComponent = () => {
  const toastContext = useContext(ToastContext);

  // Safeguard in case the context is not provided or is undefined
  if (!toastContext) {
    console.error('ToastShelf must be used within a ToastProvider');
    return null;
  }

  const { toasts } = toastContext;

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='assertive'
      aria-label='Notification'
    >
      {/* Map each toast to a Toast component */}
      {toasts.map((toast: ToastType) => (
        <li key={toast.id} className={styles.toastWrapper}>
          {/* Render each toast using the Toast component */}
          <Toast id={toast.id} variant={toast.variant}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
};

export default ToastShelf;
