import { useEffect, RefObject } from 'react';

/**
 * Hook to detect clicks outside a referenced element
 * Useful for closing modals/menus when clicking outside
 */
export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: () => void,
  isActive: boolean
) => {
  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    // Use capture phase to catch events before they bubble
    document.addEventListener('mousedown', handleClickOutside, true);
    document.addEventListener('touchstart', handleClickOutside, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('touchstart', handleClickOutside, true);
    };
  }, [ref, handler, isActive]);
};

