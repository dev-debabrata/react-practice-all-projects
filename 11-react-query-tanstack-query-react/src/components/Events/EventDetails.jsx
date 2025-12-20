import { useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import Header from '../Header.jsx';
import { fetchEvent, deleteEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  const {
    mutate,
    isPending: isPendingDeletion,
    isError: isErrorDeleting,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none',
      });
      navigate('/events');
    },
  });

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

  function handleDelete() {
    mutate({ id: params.id });
  }

  let content;

  if (isPending) {
    content = (
      <div className='w-160 mx-auto my-8 bg-[#343b3f] rounded-lg overflow-hidden text-center'>
        <p>Fetching event data...</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div className='w-160 mx-auto my-8 bg-[#343b3f] rounded-lg overflow-hidden text-center'>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            'Failed to fetch event data, please try again later.'
          }
        />
      </div>
    );
  }

  if (data) {
    const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    content = (
      <>
        <header className='w-160 mx-auto my-8 flex justify-between items-center'>
          <h1 className=' text-2xl font-bold'>
            {data.title}
          </h1>
          <nav className='flex gap-4'>
            <button
              onClick={handleStartDelete}
              className='font-bold text-[#b6cad5] bg-transparent p-1 rounded cursor-pointer'>
              Delete</button>
            <Link
              to="edit"
              className='font-bold text-[#b6cad5] bg-transparent p-1 rounded cursor-pointer'>
              Edit</Link>
          </nav>
        </header>
        <div className='w-160 mx-auto my-8 bg-[#343b3f] rounded-lg overflow-hidden'>
          <img
            src={`http://localhost:3000/${data.image}`}
            alt={data.title}
            className='w-full h-80 object-cover mb-8' />
          <div className='px-12 pb-12'>
            <div>
              <p className='text-lg text-[#b6cad5] font-bold'>
                {data.location}
              </p>
              <time
                dateTime={`Todo-DateT$Todo-Time`}
                className='text-xl my-2 block'>
                {formattedDate} @ {data.time}
              </time>
            </div>
            <p className='text-xl leading-8 text-[#b6cad5]'>
              {data.description}
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Are you sure?</h2>
          <p>
            Do you really want to delete this event? This action cannot be
            undone.
          </p>
          <div className=" flex justify-end items-center gap-8">
            {isPendingDeletion && <p>Deleting, please wait...</p>}
            {!isPendingDeletion && (
              <>
                <button
                  onClick={handleStopDelete}
                  className="font-bold text-[#3f0c26] hover:text-[#7c184c]">
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-6 py-2 bg-[#e30d7c] text-white font-bold rounded shadow hover:bg-[#e30d5b] hover:shadow-lg">
                  Delete
                </button>
              </>
            )}
          </div>
          {isErrorDeleting && (
            <ErrorBlock
              title="Failed to delete event"
              message={
                deleteError.info?.message ||
                'Failed to delete event, please try again later.'
              }
            />
          )}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link
          to="/events"
          className=" text-[#b6cad5] no-underline">
          View all Events
        </Link>
      </Header>
      <article>{content}</article>
    </>
  );
}
