
const Card = (props) => {
  return (
    <section
      className={`mx-auto my-4 w-[90%] max-w-160 rounded-md bg-white p-4 
      ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;


// const Card = (props) => {
//   return (
//     <section
//       className={`
//         mx-auto my-4 w-[90%] max-w-160 rounded-md bg-white p-4
//         ${props.className || ''}
//       `}
//     >
//       {props.children}
//     </section>
//   );
// };

// export default Card;