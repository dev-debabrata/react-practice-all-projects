import { Link } from 'react-router-dom';

export default function EventItem({ event }) {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return (
    <article className="h-full w-80 my-8 bg-[#3c4249] rounded shadow-lg overflow-hidden flex flex-col gap-4">
      <img
        src={`http://localhost:3000/${event.image}`}
        alt={event.title}
        className='w-full object-cover' />
      <div className="flex flex-col justify-between h-full p-4 text-center">
        <div>
          <h3 className=" text-xl text-[#d7bfcb]">
            {event.title}
          </h3>
          <p className="text-sm font-['Quicksand'] my-2">
            {formattedDate}
          </p>
          <p className="text-base font-['Quicksand'] my-2">
            {event.location}
          </p>
        </div>
        <p>
          <Link
            to={`/events/${event.id}`}
            className="px-6 py-2 bg-[#e30d7c] text-white font-bold rounded shadow hover:bg-[#e30d5b] hover:shadow-lg">
            View Details
          </Link>
        </p>
      </div>
    </article>
  );
}
