import { useEffect } from 'react';

import ProgressBar from './ProgressBar.jsx';

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div className=' p-4'>
      <h2 className='text-2xl m-0 p-0 text-[#5d0909]'>Are you sure?</h2>
      <p className='m-0 mx-auto text-xl max-w-[38ch] text-[#804242]'>Do you really want to remove this place?</p>
      <div className='mt-4 flex justify-end gap-4'>
        <button
          onClick={onCancel}
          className="bg-transparent border-none p-0 font-['Raleway'] text-base text-[#5d0909] cursor-pointer">
          No
        </button>
        <button
          onClick={onConfirm}
          className="cursor-pointer font-['Raleway'] text-base px-6 py-2 border-none rounded bg-[#5d0909] text-white shadow-[0_1px_4px_rgba(0,0,0,0.4)] hover:bg-[#3e0505] focus:bg-[#3e0505]">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
