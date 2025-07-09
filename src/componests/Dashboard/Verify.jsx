import React, { useState } from 'react';

const Verify = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([
    {
      username: "Alice Johnson",
      profilePic: "https://via.placeholder.com/50",
      videoUrl: "https://www.example.com/videos/alice_verification.mp4",
      cvUrl: "https://www.example.com/cvs/alice_cv.pdf",
      status: "Verified"
    },
    {
      username: "Bob Smith",
      profilePic: "https://via.placeholder.com/50",
      videoUrl: "https://www.example.com/videos/bob_verification.mp4",
      cvUrl: "https://www.example.com/cvs/bob_cv.pdf",
      status: "Not Verified"
    },
    {
      username: "Clara Williams",
      profilePic: "https://via.placeholder.com/50",
      videoUrl: "https://www.example.com/videos/clara_verification.mp4",
      cvUrl: "https://www.example.com/cvs/clara_cv.pdf",
      status: "Verified"
    },
    {
      username: "David Lee",
      profilePic: "https://via.placeholder.com/50",
      videoUrl: "https://www.example.com/videos/david_verification.mp4",
      cvUrl: "https://www.example.com/cvs/david_cv.pdf",
      status: "Not Verified"
    },
    {
      username: "Emma Thompson",
      profilePic: "https://via.placeholder.com/50",
      videoUrl: "https://www.example.com/videos/emma_verification.mp4",
      cvUrl: "https://www.example.com/cvs/emma_cv.pdf",
      status: "Verified"
    }
  ]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleStatus = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].status = updatedUsers[index].status === "Verified" ? "Not Verified" : "Verified";
    setUsers(updatedUsers);
  };

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-[4vw] md:rounded-[1vw] p-[4vw] md:p-[1vw]">
      <h1 className="text-[6vw] md:text-[1.5vw] font-bold">Verification Status</h1>

      {/* Search Bar */}
      <div className="mt-[2vw] md:mt-[0.5vw] mb-[4vw] md:mb-[1vw]">
        <input
          type="text"
          placeholder="Search by username..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-[4vw] md:px-[1vw] py-[2vw] md:py-[0.5vw] border rounded-[2vw] md:rounded-[0.5vw] focus:outline-none focus:ring-2 focus:ring-blue-600 text-[4vw] md:text-base"
        />
      </div>

      {/* Verification List */}
      <div className="border p-[2vw] md:p-[0.5vw] rounded-[1vw] md:rounded-[0.25vw] mt-[2vw] md:mt-[0.5vw]">
        {filteredUsers.length > 0 ? (
          <ul className="space-y-[2vw] md:space-y-[0.5vw]">
            {filteredUsers.map((user, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center justify-between border-b py-[2vw] md:py-[0.5vw] gap-y-[2vw] md:gap-y-0"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-x-[4vw] md:gap-x-[1vw] gap-y-[2vw] md:gap-y-0 w-full">
                  {/* Profile Picture */}
                  <img
                    src={user.profilePic}
                    alt={`${user.username}'s profile`}
                    className="w-[12vw] h-[12vw] md:w-[3vw] md:h-[3vw] rounded-full object-cover border-2 border-blue-500"
                  />
                  <div className="text-[4vw] md:text-base">
                    <p><strong>Username:</strong> {user.username}</p>
                    <p>
                      <strong>Video:</strong>
                      <a
                        href={user.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-2"
                      >
                        View Verification Video
                      </a>
                    </p>
                    <p>
                      <strong>CV:</strong>
                      <a
                        href={user.cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-2"
                      >
                        View CV
                      </a>
                    </p>
                    <p>
                      <strong>Status:</strong>
                      <span className={user.status === 'Verified' ? 'text-green-600 ml-2' : 'text-red-600 ml-2'}>
                        {user.status}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Toggle Status Button */}
                <button
                  onClick={() => toggleStatus(index)}
                  className="px-[4vw] py-[1vw] md:px-[1vw] md:py-[0.25vw] bg-blue-600 text-white rounded-[2vw] md:rounded-[0.5vw] hover:bg-blue-700 transition-colors duration-200 text-[4vw] md:text-base w-full md:w-auto"
                >
                  Change Status
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[4vw] md:text-base">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Verify;