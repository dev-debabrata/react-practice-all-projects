import { Link, Outlet } from 'react-router-dom';

import Header from '../Header.jsx';
import EventsIntroSection from './EventsIntroSection.jsx';
import FindEventSection from './FindEventSection.jsx';
import NewEventsSection from './NewEventsSection.jsx';

export default function Events() {
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events/new"
          className="px-6 py-2 bg-[#e30d7c] text-white font-bold rounded shadow
         hover:bg-[#e30d5b] hover:shadow-lg">
          New Event
        </Link>
      </Header>
      <main>
        <EventsIntroSection />
        <NewEventsSection />
        <FindEventSection />
      </main>
    </>
  );
}
