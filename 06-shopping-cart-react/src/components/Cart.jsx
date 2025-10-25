import { useContext } from 'react';

import { CartContext } from '../store/shopping-cart-context.jsx';

export default function Cart() {
  const { items, updateItemQuantity } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul className='flex flex-col gap-2 list-none my-4 p-0'>
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li
                key={item.id}
                className='flex justify-between items-center px-4 py-2 bg-[#fbd392] rounded text-[0.9rem]'>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="flex items-center gap-2 text-[1rem]">
                  <button
                    onClick={() => updateItemQuantity(item.id, -1)}
                    className='bg-transparent border-none rounded text-[#201e1a] cursor-pointer text-lg px-2 hover:bg-[#f5b744]'>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateItemQuantity(item.id, 1)}
                    className='bg-transparent border-none rounded text-[#201e1a] cursor-pointer text-lg px-2 hover:bg-[#f5b744]'>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className='text-right font-semibold'>
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
