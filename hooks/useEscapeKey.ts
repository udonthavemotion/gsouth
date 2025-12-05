import { useEffect } from 'react';

/**
 * Hook to handle Escape key press
 * Useful for closing modals/menus
 */
export const useEscapeKey = (handler: () => void, isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handler();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handler, isActive]);
};

