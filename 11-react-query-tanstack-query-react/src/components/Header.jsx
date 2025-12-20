import { useIsFetching } from '@tanstack/react-query';

export default function Header({ children }) {
  const fetching = useIsFetching();
  return (
    <>
      <div className='h-8 -mb-8 text-center accent-[#e30d7c]'>
        {fetching > 0 && <progress />}
      </div>
      <header className='m-0 px-[15%] py-8 flex justify-between items-center'>
        <div className='flex items-center gap-6'>
          <h1 className='text-2xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.26)]'>
            React Events
          </h1>
        </div>
        <nav className='flex gap-4'>{children}</nav>
      </header>
    </>
  );
}
