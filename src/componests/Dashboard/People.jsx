import React, { useState } from 'react';

const People = () => {
  const [selectedRole, setSelectedRole] = useState('recruiters');
  const [searchQuery, setSearchQuery] = useState('');

  const handleRoleClick = (role) => {
    setSelectedRole(role);
    setSearchQuery(''); // Reset search when switching roles
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const recruiters = [
    {
      name: "Alice Johnson",
      companyName: "TechTrend Innovations",
      lastActive: "2025-07-04T14:30:00Z"
    },
    {
      name: "Bob Smith",
      companyName: "Global Hiring Solutions",
      lastActive: "2025-07-03T09:15:00Z"
    },
    {
      name: "Clara Williams",
      companyName: "Future Talent Agency",
      lastActive: "2025-07-05T10:45:00Z"
    },
    {
      name: "David Lee",
      companyName: "Elite Recruitment Co.",
      lastActive: "2025-07-05T08:20:00Z"
    },
    {
      name: "Emma Thompson",
      companyName: "ProHire Solutions",
      lastActive: "2025-07-04T17:10:00Z"
    }
  ];

  const salesManagers = [
    {
      name: "Frank Miller",
      currentOccupations: ["Senior Sales Manager", "Regional Lead"],
      lastActive: "2025-07-05T12:20:00Z"
    },
    {
      name: "Grace Davis",
      currentOccupations: ["Sales Manager", "Client Relations Specialist"],
      lastActive: "2025-07-04T16:50:00Z"
    },
    {
      name: "Henry Wilson",
      currentOccupations: ["Sales Manager"],
      lastActive: "2025-07-03T11:10:00Z"
    },
    {
      name: "Isabella Moore",
      currentOccupations: ["Sales Manager", "Account Executive"],
      lastActive: "2025-07-05T09:30:00Z"
    },
    {
      name: "James Carter",
      currentOccupations: ["Junior Sales Manager", "Team Lead"],
      lastActive: "2025-07-04T13:45:00Z"
    }
  ];

  // Filter lists based on search query
  const filteredRecruiters = recruiters.filter((recruiter) =>
    recruiter.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSalesManagers = salesManagers.filter((manager) =>
    manager.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-[1vw] p-[1vw]">
      <h1 className="text-[6vw] md:text-[1.5vw] font-bold mb-[2vw] md:mb-[0.5vw]">Users</h1>
      {/* Search Bar */}
      <div className="mb-[1vw]">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-[1vw] py-[0.5vw] border rounded-[0.5vw] focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Role Selection Buttons */}
      <div className="flex justify-start items-center gap-x-[1vw]">
        <button
          className={`px-[1vw] rounded-[0.5vw] py-[0.25vw] ${
            selectedRole === 'recruiters' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => handleRoleClick('recruiters')}
        >
          Recruiters
        </button>
        <button
          className={`px-[1vw] rounded-[0.5vw] py-[0.25vw] ${
            selectedRole === 'sales-managers' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => handleRoleClick('sales-managers')}
        >
          Sales Managers
        </button>
      </div>

      {/* List Display */}
      <div className="mt-[1vw] border rounded-[0.25vw] p-[0.5vw]">
        {selectedRole === 'recruiters' && (
          <div>
            {filteredRecruiters.length > 0 ? (
              <ul className="space-y-[0.5vw]">
                {filteredRecruiters.map((recruiter, index) => (
                  <li key={index} className="border-b py-[0.5vw]">
                    <p><strong>Name:</strong> {recruiter.name}</p>
                    <p><strong>Company:</strong> {recruiter.companyName}</p>
                    <p><strong>Last Active:</strong> {new Date(recruiter.lastActive).toLocaleString()}</p>
                      <button className='bg-blue-600 text-white px-[1vw] py-[0.25vw] rounded-[0.5vw]'>View More</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No recruiters found.</p>
            )}
          </div>
        )}
        {selectedRole === 'sales-managers' && (
          <div >
            {filteredSalesManagers.length > 0 ? (
              <ul className="space-y-[0.5vw]">
                {filteredSalesManagers.map((manager, index) => (
                  <li key={index} className="border-b py-[0.5vw]">
                    <p><strong>Name:</strong> {manager.name}</p>
                    <p><strong>Occupations:</strong> {manager.currentOccupations.join(', ')}</p>
                    <p><strong>Last Active:</strong> {new Date(manager.lastActive).toLocaleString()}</p>
                    <button className='bg-blue-600 text-white px-[1vw] py-[0.25vw] rounded-[0.5vw]'>View More</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No sales managers found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default People;