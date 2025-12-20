export default function ImagePicker({ images, selectedImage, onSelect }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase text-[#3c4249] mb-1">
        Select an image
      </p>
      <ul className="flex flex-wrap gap-2 overflow-y-auto">
        {images.map((image) => {
          const isSelected = selectedImage === image.path;

          return (
            <li
              key={image.path}
              onClick={() => onSelect(image.path)}
              className={` w-16 h-12 rounded overflow-hidden cursor-pointer border-2 transition
                ${isSelected
                  ? "border-[#e30d7c]"
                  : "border-transparent hover:border-gray-300"
                }`}
            >
              <img
                src={`http://localhost:3000/${image.path}`}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
