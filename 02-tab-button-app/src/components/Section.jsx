export default function Section({ title, children, ...props }) {
  return (
    <section {...props} className=" my-12 mx-auto">
      <h2 className="text-left">{title}</h2>
      {children}
    </section>
  );
}
