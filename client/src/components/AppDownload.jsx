import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
return (
    <div className='flex flex-row items-center justify-center gap-4 py-8 bg-white border border-purple-200 rounded-lg shadow-md max-w-6xl mx-auto px-4 mb-8'>
            <div className='flex flex-col items-center gap-2 text-center text-wrap'>
                    <h2 className='text-wrap lowercase text-3xl'>Download Mobile App For Better Experience</h2>
                    <div className='flex gap-4 flex-row flex-wrap sm:flex-nowrap justify-center'>
                         <a href="#"> <img className="h-20 sm:h-14"src={assets.play_store} alt="play-store-logo" /> </a>
                            <a href="#"><img className='h-20 sm:h-14' src={assets.app_store} alt="app-store-logo" /> </a>
                    </div>
            </div>
            <img className='hidden md:block' src={assets.app_main_img} alt="" />
    </div>
)
}

export default AppDownload