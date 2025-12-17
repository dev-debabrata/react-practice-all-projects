import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className="max-w-120 bg-[#313131] text-white">
      <h2 className="text-xl my-2">Your Shopping Cart</h2>
      <ul className="list-none p-0 m-0">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
