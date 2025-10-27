import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      onClose={onClose}
      className=" fixed inset-0 m-auto mt-20 min-w-[480px] bg-[#d5c7bc] rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.26)] animate-slide-down p-0 backdrop:fixed backdrop:inset-0 backdrop:bg-[rgba(0,0,0,0.6)]"
    >
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
