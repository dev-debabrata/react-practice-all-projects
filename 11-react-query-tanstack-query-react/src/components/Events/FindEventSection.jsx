import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchEvents } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['events', { searchTerm: searchTerm }],
    queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }),
    enabled: searchTerm !== undefined
  });

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
  }

  let content = <p>Please enter a search term and to find events.</p>;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || 'Failed to fetch events.'}
      />
    );
  }

  if (data) {
    content = (
      <ul className="max-w-240 grid gap-12 grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] list-none m-0 p-0">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="my-12 mb-24 px-[15%]"
      id="all-events-section">
      <header>
        <h2 className='text-3xl font-[ Quicksand] my-8 text-[#b6cad5]'>
          Find your next event!
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
            className='px-4 py-2 rounded-l border-none bg-white font-inherit'
          />
          <button className='px-4 py-2 rounded-r bg-[#b6cad5] text-[#1d161a] font-bold cursor-pointer'>
            Search
          </button>
        </form>
      </header>
      {content}
    </section>
  );
}
