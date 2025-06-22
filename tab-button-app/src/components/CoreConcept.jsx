export default function CoreConcept({ image, title, description }) {
  return (
    <li className=" w-40 flex items-center flex-col gap-2">
      <img src={image} alt={title} className=" h-16 w-24 object-cover" />
      <h3 className=" my-2 text-xl font-semibold">{title}</h3>
      <p className=" text-sm">{description}</p>
    </li>
  );
}