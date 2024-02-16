import { RefObject, useEffect } from 'react';

export default function useOnClickOutside<T extends HTMLElement = HTMLElement> (
  ref: RefObject<T>,
  callback: (event: Event) => void,
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const popup = ref?.current;
      if (!popup || popup.contains(event?.target as Node) || null) {
        return;
      }

      callback(event);
    };

    document.addEventListener('pointerdown', listener);

    return () => {
      document.removeEventListener('pointerdown', listener);
    };
  }, [ref, callback]);
}
