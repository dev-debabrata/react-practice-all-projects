import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    // Using useEffect to sync the Modal component with the DOM Dialog API
    // This code will open the native <dialog> via it's built-in API whenever the <Modal> component is rendered
    const modal = dialog.current;
    modal.showModal();

    return () => {
      modal.close(); // needed to avoid error being thrown
    };
  }, []);

  return createPortal(
    <dialog className="fixed top-[10vh] left-1/2 -translate-x-1/2 w-120 max-h-[80vh] p-8 m-0 bg-[#e2e5eb] rounded-md z-100 shadow-[0_2px_8px_rgba(0,0,0,0.26)] flex flex-col justify-between animate-[slide-down-fade-in_300ms_ease-out_forwards]"
      ref={dialog}
      onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
