import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

// Sample data for supervisors (This should come from your backend)
const sampleSupervisors = [
  {
    id: 1,
    name: 'Dr. Alice Johnson',
    specialization: 'AI and Machine Learning',
  },
  {
    id: 2,
    name: 'Dr. Bob Smith',
    specialization: 'Blockchain Technology',
  },
  // Add more sample data as needed
];

const AppointmentBooking = () => {
  const [supervisors, setSupervisors] = useState([]);
  const [selectedSupervisor, setSelectedSupervisor] = useState('');
  const [purpose, setPurpose] = useState('');
  const [status, setStatus] = useState('pending');
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch supervisors from the backend
    const fetchSupervisors = async () => {
      try {
        // Replace with your API endpoint
        // const response = await axios.get('/api/supervisors');
        // setSupervisors(response.data);

        // Using sample data for illustration
        setSupervisors(sampleSupervisors);
      } catch (error) {
        console.error('Error fetching supervisors:', error);
      }
    };

    fetchSupervisors();
  }, []);

  const handleBooking = async () => {
    if (!selectedSupervisor || !purpose) {
      alert('Please select a supervisor and write the purpose of the appointment.');
      return;
    }

    try {
      // Replace with your API endpoint
      // const response = await axios.post('/api/appointments', {
      //   supervisorId: selectedSupervisor,
      //   purpose,
      //   status: 'pending',
      // });

      // Simulate a successful booking for demo purposes
      const response = {
        data: {
          id: Math.random(),
          supervisorId: selectedSupervisor,
          supervisorName: supervisors.find((sup) => sup.id === parseInt(selectedSupervisor)).name,
          purpose,
          status: 'pending',
        },
      };

      setAppointments([...appointments, response.data]);
      setPurpose('');
      setSelectedSupervisor('');
      setStatus('pending');
    } catch (error) {
      console.error('Error booking appointment:', error);
      setStatus('failed');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Book an Appointment with Your Supervisor</h2>
      <div className="mb-4">
        <label htmlFor="supervisor" className="block text-lg font-medium text-gray-700">
          Select Supervisor:
        </label>
        <select
          id="supervisor"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={selectedSupervisor}
          onChange={(e) => setSelectedSupervisor(e.target.value)}
        >
          <option value="">--Select Supervisor--</option>
          {supervisors.map((supervisor) => (
            <option key={supervisor.id} value={supervisor.id}>
              {supervisor.name} - {supervisor.specialization}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="purpose" className="block text-lg font-medium text-gray-700">
          Purpose of Appointment:
        </label>
        <textarea
          id="purpose"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          rows="3"
        ></textarea>
      </div>
      <button
        onClick={handleBooking}
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Book Appointment
      </button>
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Your Appointments</h3>
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div key={appointment.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <p className="text-lg font-medium">
                Supervisor: {appointment.supervisorName}
              </p>
              <p className="text-gray-700">Purpose: {appointment.purpose}</p>
              <p className="text-gray-700">Status: {appointment.status}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No appointments booked yet.</p>
        )}
      </div>
    </div>
  );
};

export default AppointmentBooking;
