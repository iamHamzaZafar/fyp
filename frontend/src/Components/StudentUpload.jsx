import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

const StudentUpload = () => {
  const [streams, setStreams] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState({});

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

  const handleFileChange = (e, streamId) => {
    setSelectedFile({ ...selectedFile, [streamId]: e.target.files[0] });
  };

  const handleFileUpload = async (streamId) => {
    if (!selectedFile || !selectedFile[streamId]) {
      alert('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile[streamId]);

    try {
      // Replace with your API endpoint
      // await axios.post(`/api/streams/${streamId}/upload`, formData);

      // Simulate successful upload
      setUploadStatus({ ...uploadStatus, [streamId]: 'File uploaded successfully' });

      // Reset selected file
      setSelectedFile({ ...selectedFile, [streamId]: null });
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus({ ...uploadStatus, [streamId]: 'Error uploading file' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Upload Files to Streams</h2>
      {streams.length > 0 ? (
        streams.map((stream) => (
          <div key={stream.id} className="mb-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-lg font-medium">{stream.title}</p>
            <p className="text-gray-700">{stream.description}</p>
            <p className="text-gray-700">Deadline: {stream.deadline}</p>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, stream.id)}
              className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
            <button
              onClick={() => handleFileUpload(stream.id)}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload File
            </button>
            {uploadStatus[stream.id] && (
              <p className="mt-2 text-sm text-gray-600">{uploadStatus[stream.id]}</p>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-700">No streams available at the moment.</p>
      )}
    </div>
  );
};

export default StudentUpload;
