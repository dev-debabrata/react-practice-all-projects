import { useContext } from 'react';

import { CartContext } from '../store/shopping-cart-context.jsx';

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <article className="h-full bg-[#5f4e33] rounded-md flex flex-col shadow-[0_0_10px_rgba(0,0,0,0.2)]">
      <img
        src={image}
        alt={title}
        className=' w-full rounded-md' />
      <div className="flex-1 flex flex-col justify-between px-4 pb-2">
        <div>
          <h3 className='text-[1.25rem] text-[#fbd392] mb-[0.15rem]'>{title}</h3>
          <p className="text-[1rem] text-[#d1b68b] m-0">${price}</p>
          <p>{description}</p>
        </div>
        <div className="text-right mt-2">
          <button
            onClick={() => addItemToCart(id)}
            className='bg-[#f4b115] hover:bg-[#f5b744] text-[#201e1a] border-none rounded px-4 py-2 text-[1rem] cursor-pointer'>Add to Cart</button>
        </div>
      </div>
    </article>
  );
}
