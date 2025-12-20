export default function ErrorBlock({ title, message }) {
  return (
    <div className="flex gap-8 items-center bg-[#f0d9e5] p-4 my-4 rounded text-[#890b35]">
      <div className="w-12 h-12 rounded-full bg-[#890b35] text-white flex items-center justify-center text-2xl">
        !
      </div>
      <div>
        <h2 className="text-inherit text-xl">{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
