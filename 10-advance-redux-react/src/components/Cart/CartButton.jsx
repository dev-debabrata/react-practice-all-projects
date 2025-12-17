import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button
      onClick={toggleCartHandler}
      className="font-inherit cursor-pointer px-6 py-2 rounded-md bg-transparent text-[#1ad1b9] border border-[#1ad1b9]  hover:bg-[#1ac5d1] hover:border-[#1ac5d1] hover:text-white active:bg-[#1ac5d1] active:border-[#1ac5d1] active:text-white">
      <span className="mx-2">My Cart</span>
      <span className=" bg-[#1ad1b9] text-[#1d1d1d] rounded-full px-5 py-[0.15rem]">
        {cartQuantity}
      </span>
    </button>
  );
};

export default CartButton;
