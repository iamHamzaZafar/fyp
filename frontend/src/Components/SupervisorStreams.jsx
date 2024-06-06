import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import 'tailwindcss/tailwind.css';

const sampleStreams = [
  {
    id: 1,
    title: 'Proposal Submission',
    description: 'Submit your project proposal here.',
    deadline: '2024-06-30',
  },
  {
    id: 2,
    title: 'Documentation Submission',
    description: 'Submit your project documentation here.',
    deadline: '2024-07-15',
  },
];

const SupervisorStreams = () => {
  const [streams, setStreams] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    // Fetch streams from the backend
    const fetchStreams = async () => {
      try {
        // Replace with your API endpoint
        // const response = await axios.get('/api/streams');
        // setStreams(response.data);

        // Using sample data for illustration
        setStreams(sampleStreams);
      } catch (error) {
        console.error('Error fetching streams:', error);
      }
    };

    fetchStreams();
  }, []);

  const onSubmit = async (data) => {
    try {
      // Replace with your API endpoint
      // const response = await axios.post('/api/streams', data);
      // setStreams([...streams, response.data]);

      // Using sample data for illustration
      const newStream = { id: streams.length + 1, ...data };
      setStreams([...streams, newStream]);

      reset();
    } catch (error) {
      console.error('Error creating stream:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-8  shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Stream</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register('title', { required: true })}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            {...register('description', { required: true })}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
            Deadline
          </label>
          <input
            id="deadline"
            type="date"
            {...register('deadline', { required: true })}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Stream
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-6">Existing Streams</h2>
      {streams.length > 0 ? (
        streams.map((stream) => (
          <div key={stream.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-lg font-medium">{stream.title}</p>
            <p className="text-gray-700">{stream.description}</p>
            <p className="text-gray-700">Deadline: {stream.deadline}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-700">No streams available at the moment.</p>
      )}
    </div>
  );
};

export default SupervisorStreams;
