import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../store/auth';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className="flex h-20 w-full items-center justify-between bg-[#3c0080] px-[10%] text-white">
      <h1 className="text-2xl font-bold">Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul className="flex list-none items-center p-0 m-0">
            <li className="mx-4">
              <a href='/' className="text-xl text-white no-underline hover:text-[#b864da]">
                My Products
              </a>
            </li>
            <li className="mx-4">
              <a href='/' className="text-xl text-white no-underline hover:text-[#b864da]">
                My Sales
              </a>
            </li>
            <li className="mx-4">
              <button
                onClick={logoutHandler}
                className="rounded border border-[#ffbb00] bg-[#ffbb00] px-6 py-2 text-xl text-[#2c2922] shadow-md hover:bg-[#ffa600] hover:border-[#ffa600]">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
