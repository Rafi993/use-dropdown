import { useState, useEffect, useCallback } from "react";

const useDropdown = (parentRef: any) => {
  const [dropdown, setDropdown] = useState(false);

  const closeModal = useCallback(
    (event: any) => {
      // Handle ESC key
      if (event.keyCode === 13) {
        setDropdown(false);
      }
    },
    [setDropdown]
  );

  const clickOutside = useCallback(
    (event: any) => {
      if (parentRef && parentRef.current) {
        if (!parentRef.current.contains(event.target)) {
          setDropdown(false);
        }
      }
    },
    [parentRef, setDropdown]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeModal, false);
    document.addEventListener("click", clickOutside, false);
    return () => {
      document.removeEventListener("keydown", closeModal, false);
      document.addEventListener("click", clickOutside, false);
    };
  }, []);

  const toggleDropdown = useCallback(() => {
    setDropdown(!dropdown);
  }, [dropdown, setDropdown]);

  const showDropdown = useCallback(() => {
    if (!dropdown) {
      setDropdown(true);
    }
  }, [dropdown, setDropdown]);

  return { dropdown, toggleDropdown, showDropdown };
};

export default useDropdown;
