import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className="my-4 bg-[#575757] p-4">
      <header className="flex justify-between items-baseline">
        <h3 className="mb-2 text-[1.75rem]">{title}</h3>
        <div className="text-xl font-bold">
          ${total.toFixed(2)}{' '}
          <span className="ml-1 text-base font-normal italic">
            (${price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className="flex justify-between items-center">
        <div className="ml-1 text-base font-normal italic">
          x <span className="text-xl font-bold">
            {quantity}
          </span>
        </div>
        <div className="actions flex justify-end my-2">
          <button
            onClick={removeItemHandler}
            className="font-inherit cursor-pointer px-6 py-2 rounded-md bg-transparent text-[#1a8ed1] border border-[#1a8ed1] hover:bg-[#1ac5d1] hover:border-[#1ac5d1] hover:text-white active:bg-[#1ac5d1] active:border-[#1ac5d1] active:text-white ml-2"
          >-</button>
          <button
            onClick={addItemHandler}
            className="font-inherit cursor-pointer px-6 py-2 rounded-md bg-transparent text-[#1a8ed1] border border-[#1a8ed1] hover:bg-[#1ac5d1] hover:border-[#1ac5d1] hover:text-white active:bg-[#1ac5d1] active:border-[#1ac5d1] active:text-white ml-2"
          >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
