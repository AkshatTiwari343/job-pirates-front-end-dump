import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='border top-5 border-gray-500 p-6  text-white flex flex-row gap-4'>
       <img className="h-11 "src={assets.jobPirates_logo} alt="Website logo" />
       <div className='w-0.5 bg-gray-400 hidden md:block'></div>
       <p className='text-gray-600 mt-2 text-xl mr-3 hidden md:block'>All right reserved. Copyright @job-pirates.dev</p>
       <div className='flex flex-row felx-wrap gap-4 ml-auto mr-4 items-center'>
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.instagram_icon} alt="instagram" />
       </div>
       
    </div>
  )
}

export default Footer