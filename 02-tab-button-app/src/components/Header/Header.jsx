import reactImg from '../../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header className=" flex flex-col justify-center items-center mt-12">
      <img
        src={reactImg}
        alt="Stylized atom"
        className=" h-20 w-40 object-cover" />
      <h1 className="my-5 font-bold text-7xl ">React Essentials</h1>
      <p className="mb-10 text-xl">
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
