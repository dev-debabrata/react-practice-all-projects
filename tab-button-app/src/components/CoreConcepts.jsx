import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts() {
  return (
    <section id="core-concepts" className="p-10 rounded-xl bg-[#140524] shadow-2xl">
      <h2 className="text-center mb-10 text-[#a18aba] font-bold text-2xl">Core Concepts</h2>
      <ul className="flex p-0 m-0 justify-center gap-10 items-center list-none">
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
