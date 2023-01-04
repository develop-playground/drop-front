import { RefObject, useEffect } from 'react';

const useOnOutsideClick = <T extends HTMLElement>(
  onClickOutside: (event: any) => void,
  active: boolean,
  ref: RefObject<T>
) => {
  useEffect(() => {
    if (!active) {
      return;
    }

    const onClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        event.stopPropagation();
        event.preventDefault();
        onClickOutside(event);
      }
    };

    document.addEventListener('mousedown', onClick);

    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  }, [ref, active]);
};

export default useOnOutsideClick;
