import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { openSignIn } = useClerk()
  const { isSignedIn, user } = useUser()

  const navigate = useNavigate()
  const {setShowRecruiterLogin} = useContext(AppContext);

  return (
    <div className='shadow py-4'>
      <div className='container px-4 mx-auto flex justify-between items-center'>
        <img onClick = {()=> navigate('/')}src={assets.jobPirates_logo} alt="logo" className='h-20 max-sm:h-10 cursor-pointer'/>
        <div className='flex gap-4 max-sm:text-xs items-center'>
          {isSignedIn ? (
            <div className='flex items-center gap-3'>
              <Link to={'/applications'} className='text-gray-600 text-nowrap'>Applied Jobs</Link>
              <p>|</p>
              <p className='text-purple-500 max-sm:hidden'>Hi, {user?.firstName+' '+ user?.lastName}</p>
              <UserButton />
            </div>
          ) : (
            <div className='flex items-center gap-3'>
              <button
                onClick={() => setShowRecruiterLogin(true)}
                className='text-gray-600'
              >
                Recriuter Login
              </button>
              <button 
                onClick={() => openSignIn()} 
                className='bg-purple-600 text-white px-6 sm:px-9 py-2 rounded-full'
                style={{ transition: 'background-color 0.3s ease' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6b46c1'}
              >
                Login
              </button>
            
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
