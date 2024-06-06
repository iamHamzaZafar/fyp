// import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css';

// // Sample data for supervisors
// const supervisors = [
//   { id: 1, name: 'Dr. John Doe', specialization: 'Machine Learning' },
//   { id: 2, name: 'Dr. Jane Smith', specialization: 'Cybersecurity' },
//   { id: 3, name: 'Dr. Emily Johnson', specialization: 'Data Science' },
//   { id: 4, name: 'Dr. Michael Brown', specialization: 'Artificial Intelligence' },
//   { id: 5, name: 'Dr. Sarah Davis', specialization: 'Software Engineering' },
//   { id: 6, name: 'Dr. William Wilson', specialization: 'Computer Networks' },
//   { id: 7, name: 'Dr. Linda Martinez', specialization: 'Database Systems' },
//   { id: 8, name: 'Dr. Richard Anderson', specialization: 'Human-Computer Interaction' },
// ];

// const SupervisorSelection = () => {
//   const [selectedSupervisor, setSelectedSupervisor] = useState(null);
//   const [projectIdea, setProjectIdea] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSupervisorChange = (e) => {
//     const supervisorId = e.target.value;
//     const supervisor = supervisors.find((sup) => sup.id === parseInt(supervisorId));
//     setSelectedSupervisor(supervisor);
//   };

//   const handleProjectIdeaChange = (e) => {
//     setProjectIdea(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedSupervisor && projectIdea) {
//       // Logic to send the project idea to the selected supervisor
//       // This could be an API call to your backend
//       console.log(`Project idea sent to ${selectedSupervisor.name}: ${projectIdea}`);

//       // Show success message
//       setMessage(`Project idea sent to ${selectedSupervisor.name}.`);
//     } else {
//       // Show error message
//       setMessage('Please select a supervisor and write a project idea.');
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-6">Select Supervisor and Submit Project Idea</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="supervisor" className="block text-lg font-medium text-gray-700">Select Supervisor:</label>
//           <select
//             id="supervisor"
//             className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             onChange={handleSupervisorChange}
//           >
//             <option value="">--Select Supervisor--</option>
//             {supervisors.map((supervisor) => (
//               <option key={supervisor.id} value={supervisor.id}>
//                 {supervisor.name} - {supervisor.specialization}
//               </option>
//             ))}
//           </select>
//         </div>

//         {selectedSupervisor && (
//           <div className="mb-4 p-4 bg-gray-100 rounded-lg">
//             <h3 className="text-xl font-semibold">{selectedSupervisor.name}</h3>
//             <p className="text-gray-700">Specialization: {selectedSupervisor.specialization}</p>
//           </div>
//         )}

//         <div className="mb-4">
//           <label htmlFor="projectIdea" className="block text-lg font-medium text-gray-700">Project Idea:</label>
//           <textarea
//             id="projectIdea"
//             className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             value={projectIdea}
//             onChange={handleProjectIdeaChange}
//             rows="4"
//             placeholder="Write your project idea here..."
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Send Project Idea
//         </button>
//       </form>

//       {message && <p className="mt-4 text-green-500">{message}</p>}
//     </div>
//   );
// };

// export default SupervisorSelection;


import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

// Sample data for supervisors
const supervisors = [
  { id: 1, name: 'Dr. John Doe', specialization: 'Machine Learning' },
  { id: 2, name: 'Dr. Jane Smith', specialization: 'Cybersecurity' },
  { id: 3, name: 'Dr. Emily Johnson', specialization: 'Data Science' },
  { id: 4, name: 'Dr. Michael Brown', specialization: 'Artificial Intelligence' },
  { id: 5, name: 'Dr. Sarah Davis', specialization: 'Software Engineering' },
  { id: 6, name: 'Dr. William Wilson', specialization: 'Computer Networks' },
  { id: 7, name: 'Dr. Linda Martinez', specialization: 'Database Systems' },
  { id: 8, name: 'Dr. Richard Anderson', specialization: 'Human-Computer Interaction' },
];

const AdvancedSupervisorSelection = () => {
  const [selectedSupervisor, setSelectedSupervisor] = useState(null);
  const [projectIdea, setProjectIdea] = useState('');
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [specializationFilter, setSpecializationFilter] = useState('');

  const handleSupervisorChange = (e) => {
    const supervisorId = e.target.value;
    const supervisor = supervisors.find((sup) => sup.id === parseInt(supervisorId));
    setSelectedSupervisor(supervisor);
  };

  const handleProjectIdeaChange = (e) => {
    setProjectIdea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSupervisor && projectIdea) {
      // Logic to send the project idea to the selected supervisor
      // This could be an API call to your backend
      console.log(`Project idea sent to ${selectedSupervisor.name}: ${projectIdea}`);

      // Show success message
      setMessage(`Project idea sent to ${selectedSupervisor.name}.`);
    } else {
      // Show error message
      setMessage('Please select a supervisor and write a project idea.');
    }
  };

  const filteredSupervisors = supervisors.filter((supervisor) =>
    supervisor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (specializationFilter ? supervisor.specialization === specializationFilter : true)
  );

  const specializations = [...new Set(supervisors.map(sup => sup.specialization))];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Select Supervisor and Submit Project Idea</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <select
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={specializationFilter}
          onChange={(e) => setSpecializationFilter(e.target.value)}
        >
          <option value="">--Filter by specialization--</option>
          {specializations.map((spec, index) => (
            <option key={index} value={spec}>{spec}</option>
          ))}
        </select>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="supervisor" className="block text-lg font-medium text-gray-700">Select Supervisor:</label>
          <select
            id="supervisor"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleSupervisorChange}
          >
            <option value="">--Select Supervisor--</option>
            {filteredSupervisors.map((supervisor) => (
              <option key={supervisor.id} value={supervisor.id}>
                {supervisor.name} - {supervisor.specialization}
              </option>
            ))}
          </select>
        </div>

        {selectedSupervisor && (
          <div className="mb-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold">{selectedSupervisor.name}</h3>
            <p className="text-gray-700">Specialization: {selectedSupervisor.specialization}</p>
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="projectIdea" className="block text-lg font-medium text-gray-700">Project Idea:</label>
          <textarea
            id="projectIdea"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={projectIdea}
            onChange={handleProjectIdeaChange}
            rows="4"
            placeholder="Write your project idea here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send Project Idea
        </button>
      </form>

      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default AdvancedSupervisorSelection;
