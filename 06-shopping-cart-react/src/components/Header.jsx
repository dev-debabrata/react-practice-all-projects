import { useRef, useContext } from 'react';

import CartModal from './CartModal.jsx';
import { CartContext } from '../store/shopping-cart-context.jsx';

export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button className='bg-[#271e07] border-none rounded px-4 py-2 text-[#f9efda] text-[1rem] cursor-pointer hover:bg-[#382e1b]'>
    Close
  </button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button className='bg-transparent border-none rounded text-[#201e1a] cursor-pointer text-[1.1rem] hover:text-[#453719]'>
          Close
        </button>
        <button className='bg-[#271e07] border-none rounded px-4 py-2 text-[#f9efda] text-[1rem] cursor-pointer hover:bg-[#382e1b]'>
          Checkout
        </button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        title="Your Cart"
        actions={modalActions} />
      <header className='flex justify-between items-center py-12 px-[15%]'>
        <div className=' flex items-center'>
          <img
            src="logo.png"
            alt="Elegant model"
            className=' w-20 mr-6' />
          <h1 className='text-center uppercase text-[#edbf68] text-[2.5rem] shadow-[0_0_4px_rgba(35,34,34,0.4)] m-0'>
            Elegant Context
          </h1>
        </div>
        <div>
          <button
            onClick={handleOpenCartClick}
            className='bg-[#edbf68] border-none rounded px-6 py-2 text-[#201e1a] text-[1.25rem] cursor-pointer hover:bg-[#f5b744]'>
            Cart ({cartQuantity})
          </button>
        </div>
      </header>
    </>
  );
}
