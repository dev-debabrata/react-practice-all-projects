const Notification = (props) => {

  let statusClasses = 'bg-[#1a8ed1]';

  if (props.status === 'error') {
    statusClasses = 'bg-[#690000]';
  }
  if (props.status === 'success') {
    statusClasses = 'bg-[#1ad1b9]';
  }

  const cssClasses = `w-full h-12 flex justify-between items-center px-[10%] text-white ${statusClasses}`;

  return (
    <section className={cssClasses}>
      <h2 className="text-base m-0">{props.title}</h2>
      <p className="text-base m-0">{props.message}</p>
    </section>
  );
};

export default Notification;


// const Notification = ({ status, title, message }) => {
//   const baseClasses =
//     "w-full h-12 flex items-center justify-between px-[10%] py-2 text-white";

//   const statusClasses = {
//     error: "bg-[#690000]",
//     success: "bg-[#1ad1b9]",
//     default: "bg-[#1a8ed1]",
//   };

//   return (
//     <section className={`${baseClasses} ${statusClasses[status] || statusClasses.default}`}>
//       <h2 className="text-base m-0">{title}</h2>
//       <p className="text-base m-0">{message}</p>
//     </section>
//   );
// };

// export default Notification;




// const Notification = (props) => {
//   let specialClasses = '';

//   if (props.status === 'error') {
//     specialClasses = classes.error;
//   }
//   if (props.status === 'success') {
//     specialClasses = classes.success;
//   }

//   const cssClasses = `${classes.notification} ${specialClasses}`;

//   return (
//     <section className={cssClasses}>
//       <h2>{props.title}</h2>
//       <p>{props.message}</p>
//     </section>
//   );
// };

// export default Notification;
