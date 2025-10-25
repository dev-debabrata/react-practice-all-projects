import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import Cart from './Cart.jsx';

const CartModal = forwardRef(function Modal(
  { title, actions },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className='fixed inset-0 m-auto mt-30 w-[40%] bg-[#d3b17b] rounded-md shadow-[0_0_10px_rgba(0,0,0,0.5)] p-6 animate-fade-slide-top'>
      <h2 className='text-[1.5rem] text-[#4f3807] uppercase m-0'>
        {title}
      </h2>
      <Cart />
      <form
        method="dialog"
        className='flex justify-end items-center gap-4 mt-4'>
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default CartModal;
