import { toast as hotToast, type ToastOptions } from 'react-hot-toast';
import { useCallback } from 'react';

export function useToast(defaultOptions?: ToastOptions) {
  const showToast = useCallback(
    (message: string, options?: ToastOptions) => {
      hotToast(message, {
        position: 'bottom-right',
        ...defaultOptions,
        ...options,
      });
    },
    [defaultOptions]
  );

  const success = useCallback(
    (message: string, options?: ToastOptions) => {
      hotToast.success(message, {
        position: 'bottom-right',
        ...defaultOptions,
        ...options,
      });
    },
    [defaultOptions]
  );

  const failure = useCallback(
    (message: string, options?: ToastOptions) => {
      hotToast.error(message, {
        position: 'bottom-right',
        ...defaultOptions,
        ...options,
      });
    },
    [defaultOptions]
  );

  return { toast: showToast, success, failure };
}