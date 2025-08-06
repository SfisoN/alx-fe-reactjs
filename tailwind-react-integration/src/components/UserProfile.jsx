import React from 'react'
import doe from '../assets/hclogo.png' 


function UserProfile() {
  return (
    <div className='user-profile bg-gray-100 p-8 max-w-sm w-[400] mx-auto my-20 rounded-lg shadow-lg'>
        <img src={doe} alt='User Avatar' className='avatar rounded-full w-40 h-40 mx-auto' />
        <h1 className='text-xl text-green-900 my-4'>John Doe</h1>
        <p className='text-gray-600 text-base'>Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  )
}

export default UserProfile
