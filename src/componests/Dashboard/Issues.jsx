import React, { useState } from 'react';

const Issues = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('most-recent');
  const [issues, setIssues] = useState([
    {
      issueName: "Server Downtime",
      issuedByName: "Alice Johnson",
      description: "Main server experienced unexpected downtime.",
      time: "2025-07-05T09:00:00Z",
      status: "Not Resolved"
    },
    {
      issueName: "Login Failure",
      issuedByName: "Bob Smith",
      description: "Users unable to log in due to authentication error.",
      time: "2025-07-04T15:30:00Z",
      status: "Resolved"
    },
    {
      issueName: "UI Bug",
      issuedByName: "Clara Williams",
      description: "Button alignment issue on dashboard page.",
      time: "2025-07-05T11:45:00Z",
      status: "Not Resolved"
    },
    {
      issueName: "Database Timeout",
      issuedByName: "David Lee",
      description: "Queries timing out on user data retrieval.",
      time: "2025-07-03T10:20:00Z",
      status: "Resolved"
    },
    {
      issueName: "Payment Gateway Error",
      issuedByName: "Emma Thompson",
      description: "Payment processing failed for multiple users.",
      time: "2025-07-04T13:15:00Z",
      status: "Not Resolved"
    }
  ]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const toggleStatus = (index) => {
    const updatedIssues = [...issues];
    updatedIssues[index].status = updatedIssues[index].status === "Resolved" ? "Not Resolved" : "Resolved";
    setIssues(updatedIssues);
  };

  // Filter issues based on search query
  const filteredIssues = issues.filter((issue) =>
    issue.issueName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.issuedByName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort issues based on sort option
  const sortedIssues = [...filteredIssues].sort((a, b) => {
    if (sortOption === 'most-recent') {
      return new Date(b.time) - new Date(a.time);
    } else if (sortOption === 'issue-name-asc') {
      return a.issueName.localeCompare(b.issueName);
    } else if (sortOption === 'issue-name-desc') {
      return b.issueName.localeCompare(a.issueName);
    }
    return 0;
  });

  return (
    <div className="bg-white rounded-[1vw] p-[1vw] max-w-full">
      <h2 className="text-[6vw] md:text-[1.5vw] font-bold mb-[2vw] md:mb-[0.5vw]">Issues</h2>
      {/* Search and Sort Filter */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-y-2 gap-x-[1vw] mb-[1vw] md:mb-4">
        <input
          type="text"
          placeholder="Search by issue name or issued by name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full md:w-3/4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
        />
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="w-full md:w-1/4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm mt-2 md:mt-0"
        >
          <option value="most-recent">Most Recent</option>
          <option value="issue-name-asc">Issue Name (A-Z)</option>
          <option value="issue-name-desc">Issue Name (Z-A)</option>
        </select>
      </div>

      {/* Issues List */}
      <div className="mt-[1vw] md:mt-4 border rounded-[0.25vw] md:rounded-md p-[0.5vw] md:p-4">
        {sortedIssues.length > 0 ? (
          <ul className="space-y-[0.5vw] md:space-y-4">
            {sortedIssues.map((issue, index) => (
              <li
                key={index}
                className="border-b last:border-b-0 py-[0.5vw] md:py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2"
              >
                <div className="w-full">
                  <p className="text-sm md:text-base"><strong>Issue Name:</strong> {issue.issueName}</p>
                  <p className="text-sm md:text-base"><strong>Issued By:</strong> {issue.issuedByName}</p>
                  <p className="text-sm md:text-base"><strong>Description:</strong> {issue.description}</p>
                  <p className="text-sm md:text-base"><strong>Time:</strong> {new Date(issue.time).toLocaleString()}</p>
                  <p className="text-sm md:text-base">
                    <strong>Status:</strong>
                    <span className={issue.status === 'Resolved' ? 'text-green-600' : 'text-red-600'}>
                      {issue.status}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => toggleStatus(index)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm w-full md:w-auto"
                >
                  Change Status
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm md:text-base">No issues found.</p>
        )}
      </div>
    </div>
  );
};

export default Issues;