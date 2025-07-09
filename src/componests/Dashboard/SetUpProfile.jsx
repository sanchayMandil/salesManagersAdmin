import React from 'react'

const SetUpProfile = () => {
  return (
    <div className='bg-white rounded-[1vw] p-[1vw]'>
      <div>
      <h2 className="text-[6vw] md:text-[1.5vw] font-bold mb-[2vw] md:mb-[0.5vw]">Set Up Profile</h2>
      {/* Add form or content for setting up profile here */}
      <label htmlFor="">Add type of role</label>
      <div className='flex items-center gap-x-[0.5vw] mt-[0.5vw]'>
        <input type="text" placeholder='Enter role' className='border border-gray-300 rounded-[0.5vw] p-[0.5vw]' />
              <button className='bg-blue-600 text-white p-[0.5vw] rounded-[0.25vw]'>ADD</button>
      </div>
      </div>
    </div>
  )
}

export default SetUpProfile
