import { Link } from "react-router-dom";
import meetupImg from "../../assets/meetup.jpg";

export default function EventsIntroSection() {
  return (
    <section
      className="px-[15%] h-128 flex flex-col items-center justify-center text-center text-white bg-cover bg-center relative"
      style={{ backgroundImage: `url(${meetupImg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      <div className="relative z-10">
        <h2 className="text-4xl my-6 font-['Quicksand']">
          Connect with amazing people <br />
          or <strong className="text-[#e30d7c]">find a new passion</strong>
        </h2>

        <p className="text-xl mb-6 font-['Quicksand']">
          Anyone can organize and join events on React Event!
        </p>

        <Link
          to="/events/new"
          className="inline-block px-6 py-2 bg-[#e30d7c] text-white font-bold rounded shadow hover:bg-[#e30d5b]"
        >
          Create your first event
        </Link>
      </div>
    </section>
  );
}
