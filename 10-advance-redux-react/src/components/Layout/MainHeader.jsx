import CartButton from '../Cart/CartButton';

const MainHeader = (props) => {
  return (
    <header className="w-full h-20 px-[10%] flex items-center justify-between bg-[#252424]">
      <h1 className="text-white text-xl font-semibold">
        ReduxCart
      </h1>
      <nav>
        <ul className="list-none m-0 p-0 flex gap-4">
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
