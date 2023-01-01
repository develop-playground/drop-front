import { useState, useCallback, useRef, useEffect } from 'react';

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleGlobalMouseDown = ({ target }: MouseEvent) => {
      if (!ref.current || ref.current.contains(target as Node)) {
        return;
      }

      close();
    };

    document.addEventListener('mousedown', handleGlobalMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleGlobalMouseDown);
    };
  }, [close]);

  return { ref, isOpen, open, close };
};

export default useDropdown;
