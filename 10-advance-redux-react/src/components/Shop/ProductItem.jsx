import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li>
      <Card>
        <header className="flex justify-between items-baseline">
          <h3 className="my-2 text-xl">{title}</h3>
          <div className=" rounded-full px-6 py-[0.15rem] bg-[#3a3a3a] text-white text-xl">
            ${price.toFixed(2)}
          </div>
        </header>
        <p className="text-[#3a3a3a]">{description}</p>
        <div className="actions flex justify-end">
          <button
            onClick={addToCartHandler}
            className=" font-inherit cursor-pointer px-6 py-2 rounded-md bg-transparent text-[#1a8ed1] border border-[#1a8ed1] hover:bg-[#1ac5d1] hover:border-[#1ac5d1] hover:text-white active:bg-[#1ac5d1] active:border-[#1ac5d1] active:text-white">
            Add to Car
            t</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
