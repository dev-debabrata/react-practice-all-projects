import Logo from '../assets/investment-calculator.png';

export default function Header() {
  return (
    <header className=' flex flex-col justify-center items-center gap-1 my-10 mx-auto'>
      <img
        src={Logo}
        alt="Logo showing a money bag"
        className='w-30 h-30 object-contain bg-transparent' />
      <h1 className=' text-2xl'>Investment Calculator</h1>
    </header>
  );
}
