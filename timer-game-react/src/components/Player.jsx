import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section className=' text-center'>
      <h2 className=' text-[#54a399]'>
        Welcome {enteredPlayerName ?? 'unknown entity'}
      </h2>
      <p className=' flex justify-center items-center'>
        <div className=' space-x-0.5'>
          <input
            ref={playerName}
            type="text"
            className='font-inherit border border-[#54a399] bg-[#192f2b] rounded-l px-1 py-1 text-[#d1f0ec]' />
          <button
            onClick={handleClick}
            className='cursor-pointer bg-[#54a399] border border-[#54a399] text-[#061e1a] px-4 py-[0.4rem] rounded-r hover:bg-[#3c8379] hover:border-[#3c8379]'>
            Set Name
          </button>
        </div>
      </p>
    </section>
  );
}
