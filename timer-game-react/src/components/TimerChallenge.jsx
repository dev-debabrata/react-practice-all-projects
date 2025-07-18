import { useState, useRef } from 'react';

import ResultModal from './ResultModal.jsx';

// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="w-[22rem] flex flex-col items-center justify-center p-8 my-8 mx-auto bg-[linear-gradient(#4df8df,_#4df0f8)] text-[#221c18] shadow-[0_2px_8px_rgba(35,34,34,0.6)] rounded-md">
        <h2 className=" text-2xl m-0 tracking-widest text-center uppercase text-[#221c18]">{title}</h2>
        <p className="border border-[#46cebe] rounded px-2 py-1 m-2">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button
            onClick={timerIsActive ? handleStop : handleStart}
            className="mt-4 px-4 py-2 border-none rounded bg-[#12352f] text-[#edfcfa] text-[1.2rem] cursor-pointer hover:bg-[#051715]">
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? ' animate-flase' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
