import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

// Sample data for appointments (This should come from your backend)
const sampleAppointments = [
  {
    id: 1,
    studentName: 'John Doe',
    supervisorId: 1,
    supervisorName: 'Dr. Alice Johnson',
    purpose: 'Discuss project proposal',
    status: 'pending',
    remarks: '',
  },
  {
    id: 2,
    studentName: 'Jane Smith',
    supervisorId: 1,
    supervisorName: 'Dr. Alice Johnson',
    purpose: 'Review literature survey',
    status: 'pending',
    remarks: '',
  },
  // Add more sample data as needed
];

const SupervisorAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments from the backend
    const fetchAppointments = async () => {
      try {
        // Replace with your API endpoint
        // const response = await axios.get('/api/appointments');
        // setAppointments(response.data);

        // Using sample data for illustration
        setAppointments(sampleAppointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleDecision = async (id, decision, remarks) => {
    try {
      // Replace with your API endpoint
      // await axios.patch(`/api/appointments/${id}`, { status: decision, remarks });

      // Update local state for demo purposes
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === id
            ? { ...appointment, status: decision, remarks }
            : appointment
        )
      );
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Appointment Requests</h2>
      {appointments.length > 0 ? (
        appointments.map((appointment) => (
          <div key={appointment.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-lg font-medium">Student: {appointment.studentName}</p>
            <p className="text-gray-700">Purpose: {appointment.purpose}</p>
            <p className="text-gray-700">Status: {appointment.status}</p>
            {appointment.status === 'pending' && (
              <div className="mt-4">
                <label htmlFor={`remarks-${appointment.id}`} className="block text-sm font-medium text-gray-700">
                  Remarks:
                </label>
                <textarea
                  id={`remarks-${appointment.id}`}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="2"
                  value={appointment.remarks}
                  onChange={(e) => {
                    const newRemarks = e.target.value;
                    setAppointments((prevAppointments) =>
                      prevAppointments.map((appt) =>
                        appt.id === appointment.id ? { ...appt, remarks: newRemarks } : appt
                      )
                    );
                  }}
                ></textarea>
                <div className="mt-2 flex space-x-4">
                  <button
                    onClick={() => handleDecision(appointment.id, 'approved', appointment.remarks)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDecision(appointment.id, 'rejected', appointment.remarks)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Reject
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-700">No appointment requests at the moment.</p>
      )}
    </div>
  );
};

export default SupervisorAppointments;
