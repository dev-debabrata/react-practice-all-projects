import { useDispatch } from 'react-redux';

import { authActions } from '../store/auth';

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <main className="mx-auto mt-20 w-100 rounded-lg bg-[#f4f0fa] p-4 text-center shadow-md">
      <section>
        <form onSubmit={loginHandler}>
          <div className="mb-2">
            <label
              htmlFor='email'
              className="mb-2 block text-sm uppercase text-gray-600">
              Email
            </label>
            <input
              type='email'
              id='email'
              className="mx-auto block w-[20rem] rounded border border-gray-300 p-1" />
          </div>
          <div className="mb-2">
            <label
              htmlFor='password'
              className="mb-2 block text-sm uppercase text-gray-600">
              Password
            </label>
            <input
              type='password'
              id='password'
              className="mx-auto block w-[20rem] rounded border border-gray-300 p-1" />
          </div>
          <button className=" m-4 cursor-pointer rounded-md border border-[#3c0080] bg-[#3c0080] px-6 py-2 text-white font-inherit hover:bg-[#5b14ac] hover:border-[#5b14ac] active:bg-[#5b14ac] active:border-[#5b14ac]">
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
