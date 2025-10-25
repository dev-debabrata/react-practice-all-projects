export default function Shop({ children }) {
  return (
    <section className="w-7/10 mx-auto my-8">
      <h2 className="text-[1.5rem] text-[#a59b8b] uppercase">Elegant Clothing For Everyone</h2>

      <ul className="list-none m-0 p-0 grid gap-8 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">{children}</ul>
    </section>
  );
}
