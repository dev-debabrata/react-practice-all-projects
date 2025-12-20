export default function LoadingIndicator() {
  return (
    <div className="inline-block relative w-20 h-20 my-4">
      <div className="absolute w-16 h-16 m-2 box-border border-8 border-[#e30d5b] rounded-full animate-[spin_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-t-transparent"></div>
      <div className="absolute w-16 h-16 m-2 box-border border-8 border-[#e30d5b] rounded-full animate-[spin_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-t-transparent delay-[-0.45s]"></div>
      <div className="absolute w-16 h-16 m-2 box-border border-8 border-[#e30d5b] rounded-full animate-[spin_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-t-transparent delay-[-0.3s]"></div>
      <div className="absolute w-16 h-16 m-2 box-border border-8 border-[#e30d5b] rounded-full animate-[spin_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-t-transparent delay-[-0.15s]"></div>
    </div>
  );
}
