import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const nav = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: 'Usersname',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    occupation: 'Manager',
    age: 30,
    dob: '1995-01-01',
    maritalStatus: 'Single'
  });

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    setIsEditing(false);
    console.log('Profile saved:', profile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setProfile({
      username: 'Usersname',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      occupation: 'Manager',
      age: 30,
      dob: '1995-01-01',
      maritalStatus: 'Single'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-[#f1f1f1] min-h-screen p-4 sm:p-8">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl p-4 md:p-8 gap-8 shadow-md max-w-5xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-12">
          <button
            className="text-lg md:text-xl font-bold self-start mb-2"
            onClick={() => nav(-1)}
          >
            {`< Back`}
          </button>
          <div className="rounded-full overflow-hidden border-blue-600 border-4 w-32 h-32 md:w-52 md:h-52 flex items-center justify-center">
            <img
              className="object-cover w-full h-full bg-gray-300"
              src="https://img.icons8.com/?size=100&id=20750&format=png&color=000000"
              alt="Profile"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-stretch">
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className="text-2xl md:text-4xl font-bold border border-gray-300 rounded-lg p-2 w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          ) : (
            <h1 className="text-2xl md:text-4xl font-bold">{profile.username}</h1>
          )}
          <div className="px-0 md:px-8 mt-4">
            <h2 className="text-lg md:text-xl font-medium">Bio</h2>
            <div className="border border-gray-300 p-2 md:p-4 rounded-lg mt-2 bg-white">
              {isEditing ? (
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  className="w-full h-24 md:h-32 border-none rounded-md p-2 text-base md:text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              ) : (
                <p className="text-base md:text-lg text-gray-700">{profile.bio}</p>
              )}
            </div>
          </div>
          <div className="px-0 md:px-8 mt-4 flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-medium">Occupation</h2>
              <div className="border border-gray-300 p-2 md:p-4 rounded-lg mt-2 bg-white">
                {isEditing ? (
                  <input
                    type="text"
                    name="occupation"
                    value={profile.occupation}
                    onChange={handleChange}
                    className="w-full border-none rounded-md p-2 text-base md:text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                ) : (
                  <p className="text-base md:text-lg text-gray-700">{profile.occupation}</p>
                )}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-medium">Age</h2>
              <div className="border border-gray-300 p-2 md:p-4 rounded-lg mt-2 bg-white">
                {isEditing ? (
                  <input
                    type="number"
                    name="age"
                    value={profile.age}
                    onChange={handleChange}
                    className="w-full border-none rounded-md p-2 text-base md:text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                ) : (
                  <p className="text-base md:text-lg text-gray-700">{profile.age}</p>
                )}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-medium">Date Of Birth</h2>
              <div className="border border-gray-300 p-2 md:p-4 rounded-lg mt-2 bg-white">
                {isEditing ? (
                  <input
                    type="date"
                    name="dob"
                    value={profile.dob}
                    onChange={handleChange}
                    className="w-full border-none rounded-md p-2 text-base md:text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                ) : (
                  <p className="text-base md:text-lg text-gray-700">{profile.dob}</p>
                )}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-medium">Marital Status</h2>
              <div className="border border-gray-300 p-2 md:p-4 rounded-lg mt-2 bg-white">
                {isEditing ? (
                  <input
                    type="text"
                    name="maritalStatus"
                    value={profile.maritalStatus}
                    onChange={handleChange}
                    placeholder="Single/Married"
                    className="w-full border-none rounded-md p-2 text-base md:text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                ) : (
                  <p className="text-base md:text-lg text-gray-700">{profile.maritalStatus}</p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center my-6">
            {isEditing ? (
              <>
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg md:text-2xl mr-4 hover:bg-blue-700 transition-colors"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="bg-gray-600 text-white px-6 py-2 rounded-lg text-lg md:text-2xl hover:bg-gray-700 transition-colors"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg md:text-2xl hover:bg-blue-700 transition-colors"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;