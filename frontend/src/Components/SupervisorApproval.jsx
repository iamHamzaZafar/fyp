import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import 'tailwindcss/tailwind.css';

// Sample data for requests (This should come from your backend)
const sampleRequests = [
  {
    id: 1,
    studentName: 'Alice Johnson',
    projectIdea: 'AI-powered chatbot for healthcare',
    status: 'pending',
    remarks: '',
  },
  {
    id: 2,
    studentName: 'Bob Smith',
    projectIdea: 'Blockchain-based voting system',
    status: 'pending',
    remarks: '',
  },
  // Add more sample data as needed
];

const SupervisorApproval = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch requests from the backend
    const fetchRequests = async () => {
      try {
        // Replace with your API endpoint
        // const response = await axios.get('/api/requests');
        // setRequests(response.data);

        // Using sample data for illustration
        setRequests(sampleRequests);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleApproval = async (id, status, remarks) => {
    try {
      // Replace with your API endpoint
      // await axios.post(`/api/requests/${id}/status`, { status, remarks });

      // Update the request locally for demo purposes
      setRequests((prevRequests) =>
        prevRequests.map((req) =>
          req.id === id ? { ...req, status, remarks } : req
        )
      );
    } catch (error) {
      console.error('Error updating request status:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Student Requests for Approval</h2>
      {requests.map((request) => (
        <div key={request.id} className="mb-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold">{request.studentName}</h3>
          <p className="text-gray-700 mb-2">Project Idea: {request.projectIdea}</p>
          <div className="mb-2">
            <label htmlFor={`remarks-${request.id}`} className="block text-lg font-medium text-gray-700">
              Remarks:
            </label>
            <textarea
              id={`remarks-${request.id}`}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={request.remarks}
              onChange={(e) =>
                setRequests((prevRequests) =>
                  prevRequests.map((req) =>
                    req.id === request.id ? { ...req, remarks: e.target.value } : req
                  )
                )
              }
              rows="2"
            ></textarea>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => handleApproval(request.id, 'approved', request.remarks)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Approve
            </button>
            <button
              onClick={() => handleApproval(request.id, 'rejected', request.remarks)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Reject
            </button>
          </div>
          {request.status !== 'pending' && (
            <p className="mt-2 text-gray-600">
              Status: <span className={`font-bold ${request.status === 'approved' ? 'text-green-600' : 'text-red-600'}`}>{request.status}</span>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SupervisorApproval;
