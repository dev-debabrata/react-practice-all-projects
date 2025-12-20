import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import ImagePicker from '../ImagePicker.jsx';
import { fetchSelectableImages } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EventForm({ inputData, onSubmit, children }) {
  const [selectedImage, setSelectedImage] = useState(inputData?.image);

  const { data, isPending, isError } = useQuery({
    queryKey: ['events-images'],
    queryFn: fetchSelectableImages,
  });

  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmit({ ...data, image: selectedImage });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="">
        <label
          htmlFor="title"
          className='block text-xs font-bold mb-1 uppercase text-[#3c4249]'>
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={inputData?.title ?? ''}
          className='w-full p-1 text-lg rounded border border-gray-300'
        />
      </p>

      {isPending && <p>Loading selectable images...</p>}
      {isError && (
        <ErrorBlock
          title="Failed to load selectable images"
          message="Please try again later."
        />
      )}
      {data && (
        <div className="">
          <ImagePicker
            images={data}
            onSelect={handleSelectImage}
            selectedImage={selectedImage}
          />
        </div>
      )}

      <p className="">
        <label
          htmlFor="description"
          className='block text-xs font-bold mb-1 uppercase text-[#3c4249]'>
          Description
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={inputData?.description ?? ''}
          className='w-full p-1 text-lg rounded border border-gray-300'
        />
      </p>

      <div className=" flex gap-8">
        <p className="">
          <label
            htmlFor="date"
            className='block text-xs font-bold mb-1 uppercase text-[#3c4249]'>
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={inputData?.date ?? ''}
            className='w-full p-1 text-lg rounded border border-gray-300'
          />
        </p>

        <p className="">
          <label
            htmlFor="time"
            className='block text-xs font-bold mb-1 uppercase text-[#3c4249]'>
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            defaultValue={inputData?.time ?? ''}
            className='w-full p-1 text-lg rounded border border-gray-300'
          />
        </p>
      </div>

      <p className="">
        <label
          htmlFor="location"
          className='block text-xs font-bold mb-1 uppercase text-[#3c4249]'>
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          defaultValue={inputData?.location ?? ''}
          className='w-full p-1 text-lg rounded border border-gray-300'
        />
      </p>

      <p className=" flex justify-end items-center gap-8">
        {children}
      </p>
    </form>
  );
}
