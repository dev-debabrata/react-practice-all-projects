export default function Places({
  title,
  places,
  fallbackText,
  onSelectPlace,
  isLoading,
  loadingText,
}) {
  console.log(places);
  return (
    <section className=" max-w-7xl mx-auto my-8 p-4 border-2 border-[#0d373e] rounded-lg">
      <h2 className="font-['Raleway'] text-2xl m-0 p-0 mb-4 text-[#8feeff] text-center">{title}</h2>
      {isLoading &&
        <p className="text-center">{loadingText}</p>}
      {!isLoading && places.length === 0 &&
        <p className="text-center">{fallbackText}</p>}
      {!isLoading && places.length > 0 &&
        (
          <ul className="max-w-7xl grid grid-cols-5 gap-8 my-8 mx-auto p-0 list-none">
            {places.map((place) => (
              <li
                key={place.id}
                className="relative flex flex-col rounded-lg bg-[#1f1c2c] shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] animate-slide-up">
                <button
                  onClick={() => onSelectPlace(place)}
                  className="bg-transparent border-none p-0 transition-all duration-200 ease-in-out hover:odd:shadow-[0_0_8px_4px_rgba(255,217,0,0.6)] hover:odd:rotate-[5deg] hover:even:shadow-[0_0_8px_4px_rgba(255,217,0,0.6)] hover:even:rotate-[-5deg] rounded-lg">
                  <img
                    src={`http://localhost:3000/${place.image.src}`}
                    alt={place.image.alt}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <h3 className="font-['Raleway'] font-normal text-sm absolute bottom-0 right-4 m-4 bg-gray-800 rounded-md px-2 py-1 shadow-[0_1px_4px_rgba(0,0,0,0.4)]">{place.title}</h3>
                </button>
              </li>
            ))}
          </ul>
        )}
    </section>
  );
}
