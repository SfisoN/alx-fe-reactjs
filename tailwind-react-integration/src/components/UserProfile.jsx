import React from 'react'
import doe from '../assets/hclogo.png' 


function UserProfile() {
  return (
    <div className='user-profile bg-gray-100 sm:p-4 md:max-w-sm'>
        <img src={doe} alt='User Avatar' className='avatar rounded-full ["sm:h-24", "md:h-36"] mx-auto' />
        <h1 className='md:text-xl sm:text-lg text-blue-800 my-4'>John Doe</h1>
        <p className='text-gray-600 md:text-base sm:text-sm'>Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  )
}

export default UserProfile
