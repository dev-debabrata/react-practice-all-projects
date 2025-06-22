// export default function TabButton({ children, isSelected, ...props }) {
//   console.log('TABBUTTON COMPONENT EXECUTING');
//   return (
//     <li>
//       <button className={isSelected ? 'active' : undefined} {...props}>
//         {children}
//       </button>
//     </li>
//   );
// }


export default function TabButton({ children, isSelected, ...props }) {
  const buttonTabs =
    "px-4 py-2 rounded-md bg-transparent text-[#a18aba] font-['Roboto_Condensed'] text-base cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#1b082f] hover:text-[#ebe7ef]";
  const activeTabs = isSelected
    ? "bg-[#7925d3] text-[#ebe7ef]"
    : "";

  return (
    <li>
      <button className={`${buttonTabs} ${activeTabs}`} {...props}>
        {children}
      </button>
    </li>
  );
}