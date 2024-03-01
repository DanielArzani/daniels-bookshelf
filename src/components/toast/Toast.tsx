import React, { useContext } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';
import { ToastContext } from './ToastProvider';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import styles from './Toast.module.css';

import { VariantType } from './VariantType';

// Import the icon props type from react-feather for complete type accuracy.
import { IconProps } from 'react-feather';

// Props type definition
type ToastProps = {
  id: string;
  variant: VariantType;
  children: React.ReactNode;
};

// Mapping of variant types to icons
const ICONS_BY_VARIANT: {
  [key in VariantType]: React.FunctionComponent<IconProps>;
} = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

/**
 * Displays a toast message with an icon, content, and a dismiss button.
 * @param id {string} - Unique identifier for the toast message.
 * @param variant {VariantType} - Type of the toast message which influences the icon and styling.
 * @param children {React.ReactNode} - The content of the toast message.
 */
const Toast: React.FunctionComponent<ToastProps> = ({
  id,
  variant,
  children,
}) => {
  // @ts-ignore
  const { dismissToast } = useContext(ToastContext);

  const Icon = ICONS_BY_VARIANT[variant]; // Select the appropriate icon based on the variant

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} /> {/* Display the icon */}
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>{' '}
        {/* Visually hide the variant but make accessible */}
        {children} {/* Display the toast message */}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => dismissToast(id)} // Dismiss the toast on click
        aria-label='Dismiss message'
        aria-live='off'
      >
        <X size={24} /> {/* Display the close icon */}
      </button>
    </div>
  );
};

export default Toast;
