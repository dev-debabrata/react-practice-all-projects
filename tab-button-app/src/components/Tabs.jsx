// export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
//   // const ButtonsContainer = buttonsContainer;
//   return (
//     <>
//       <ButtonsContainer className="my-4 p-0 flex gap-2 list-none">{buttons}</ButtonsContainer>
//       {children}
//     </>
//   );
// }


export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  // const ButtonsContainer = buttonsContainer;
  const ContainerTag = ButtonsContainer;
  return (
    <>
      <ContainerTag className="my-4 p-0 flex gap-2 list-none">{buttons}</ContainerTag>
      {children}
    </>
  );
}