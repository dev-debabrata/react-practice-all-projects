import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../util/http.js';

export default function NewEventsSection() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', { max: 3 }],
    queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }),
    staleTime: 5000,
    // gcTime: 1000
  });

  let content;

  if (isPending) {
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
      <ul className="max-w-240 grid gap-12 grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="my-12 mb-24 px-[15%]" id="new-events-section">
      <header>
        <h2 className="text-3xl font-['Quicksand'] my-8 text-[#b6cad5]">
          Recently added events
        </h2>
      </header>
      {content}
    </section>
  );
}
