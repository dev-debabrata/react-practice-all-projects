export default function Error({ title, message, onConfirm }) {
  return (
    <div className="max-w-[640px] mx-auto my-4 p-4 bg-[#f4c7c7] text-[#3e0505] text-center rounded-md shadow-sm">
      <h2>{title}</h2>
      <p>{message}</p>
      {onConfirm && (
        <div className="mt-4 flex justify-end gap-4">
          <button onClick={onConfirm} className="cursor-pointer font-['Raleway'] text-base px-6 py-2 border-none rounded bg-[#5d0909] text-white shadow-[0_1px_4px_rgba(0,0,0,0.4)] hover:bg-[#3e0505] focus:bg-[#3e0505]">
            Okay
          </button>
        </div>
      )}
    </div>
  );
}
