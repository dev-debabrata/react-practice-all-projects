import { Link } from 'react-router-dom';

import meetupImg from '../../assets/meetup.jpg';

export default function EventsIntroSection() {
  return (
    <section
      // className="content-section"
      className='mt-32 mb-12 px-[15%] pt-32 text-center text-[#222c31] my-12'
      style={{ backgroundImage: `url(${meetupImg})` }}
    >
      <h2 className='text-4xl my-8 text-[#1d161a] font-[Quicksand]'>
        Connect with amazing people <br />
        or <strong className='text-[#e30d7c]'>find a new passion</strong>
      </h2>
      <p className='text-xl leading-relaxed font-[Quicksand] drop-shadow'>
        Anyone can organize and join events on React Event!
      </p>
      <p>
        <Link to="/events/new"
          className="px-6 py-2 bg-[#e30d7c] text-white font-bold rounded shadow
         hover:bg-[#e30d5b] hover:shadow-lg">
          Create your first event
        </Link>
      </p>
    </section>
  );
}
