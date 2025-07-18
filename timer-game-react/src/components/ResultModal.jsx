// import { forwardRef, useImperativeHandle, useRef } from 'react';
// import { createPortal } from 'react-dom';

// const ResultModal = forwardRef(function ResultModal(
//   { targetTime, remainingTime, onReset },
//   ref
// ) {
//   const dialog = useRef();

//   const userLost = remainingTime <= 0;
//   const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
//   const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

//   useImperativeHandle(ref, () => {
//     return {
//       open() {
//         dialog.current.showModal();
//       },
//     };
//   });

//   return createPortal(
//     <dialog ref={dialog} className="result-modal">
//       {userLost && <h2>You lost</h2>}
//       {!userLost && <h2>Your Score: {score}</h2>}
//       <p>
//         The target time was <strong>{targetTime} seconds.</strong>
//       </p>
//       <p>
//         You stopped the timer with{' '}
//         <strong>{formattedRemainingTime} seconds left.</strong>
//       </p>
//       <form method="dialog" onSubmit={onReset}>
//         <button>Close</button>
//       </form>
//     </dialog>,
//     document.getElementById('modal')
//   );
// });

// export default ResultModal;



import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="border-none rounded-lg p-8 bg-[#d7fcf8] animate-slide-in 
             backdrop:backdrop-brightness-50 backdrop:bg-black/90 text-[#12352f]
             fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {userLost ? (
        <h2 className="font-handjet text-5xl uppercase mb-1">You lost</h2>
      ) : (
        <h2 className="font-handjet text-5xl uppercase mb-1">Your Score: {score}</h2>
      )}

      <p className="my-2 text-[1.2rem]">
        The target time was <strong className="text-[#10655b]">{targetTime} seconds</strong>.
      </p>
      <p className="my-2 text-[1.2rem]">
        You stopped the timer with{' '}
        <strong className="text-[#10655b]">{formattedRemainingTime} seconds left</strong>.
      </p>

      <form method="dialog" onSubmit={onReset} className="text-right">
        <button
          className="mt-4 px-4 py-2 border-none rounded bg-[#12352f] text-[#edfcfa] text-[1.2rem] cursor-pointer hover:bg-[#051715]"
        >
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
