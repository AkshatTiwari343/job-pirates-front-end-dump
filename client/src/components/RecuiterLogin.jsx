import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const RecuiterLogin = () => {
    const [state, setState] = useState('Login');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [image, setImage] = useState(false);
    const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

    const { setShowRecruiterLogin } = useContext(AppContext);
    
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(state === 'Sign Up' && !isTextDataSubmitted){
            setIsTextDataSubmitted(true);
        }
    }

    useEffect(()=> {
        document.body.style.overflow= 'hidden'
        return() => {
            document.body.style.overflow= 'unset'
        }
    },[] )

    return (
        <div className='bg-black-100 absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex items-center justify-center overflow-visible px-4 sm:px-0'>
            <form onSubmit={onSubmitHandler} className='relative bg-white p-6 sm:p-10 rounded-lg flex flex-col gap-4 sm:gap-6 text-slate-500 w-full max-w-md'>
                
                {/* Cross icon - mobile friendly */}
                <img 
                    src={assets.cross_icon} 
                    className='absolute top-4 sm:top-5 right-4 sm:right-5 w-8 h-8 z-50 cursor-pointer' 
                    onClick={() => setShowRecruiterLogin(false)} 
                    alt="close" 
                />

                <h1 className='text-2xl text-neutral-700 text-center'>Recruiter {state}</h1>
                <p className='text-sm text-center text-wrap'>Welcome Back! Please Sign In to Continue</p>

                {state === "Sign Up" && isTextDataSubmitted ? (
                    <div className='flex flex-col items-center gap-4 my-4'>
                        <label htmlFor="image" className='flex flex-col items-center gap-2 cursor-pointer'>
                            <img 
                                className='w-16 h-16 rounded-full object-cover' 
                                src={image ? URL.createObjectURL(image) : assets.upload_area} 
                                alt="upload" 
                            />
                            <span className='text-sm'>Upload Company Logo</span>
                            <input onChange={e => setImage(e.target.files[0])} type="file" id='image' hidden />
                        </label>
                    </div>
                ) : (
                    <>
                        {state !== 'Login' && (
                            <div className='flex items-center gap-3 border border-purple-500 rounded-lg px-3 py-2 hover:border-2'>
                                <img src={assets.person_icon} alt="" />
                                <input type="text" placeholder='Company Name' className='focus:outline-none w-full' required onChange={e => setName(e.target.value)} value={name}/>
                            </div>
                        )}

                        <div className='flex items-center gap-3 border border-purple-500 rounded-lg px-3 py-2 hover:border-2'>
                            <img src={assets.email_icon} alt="" />
                            <input type="email" placeholder='Email Id' className='focus:outline-none w-full' required onChange={e => setEmail(e.target.value)} value={email}/>
                        </div>

                        <div className='flex items-center gap-3 border border-purple-500 rounded-lg px-3 py-2 hover:border-2'>
                            <img src={assets.person_icon} alt="" />
                            <input type="password" placeholder='Password' className='focus:outline-none w-full' required onChange={e => setPassword(e.target.value)} value={password}/>
                        </div>
                    </>
                )}

                {state === 'Login' && (
                    <p className='text-sm text-purple-700 underline my-2 text-center cursor-pointer'>Forgot Password?</p>
                )}

                <button type='submit' className='bg-purple-700 text-white px-8 py-2 rounded w-3/4 mx-auto'>
                    {state === 'Login' ? 'Login' : isTextDataSubmitted ? 'Sign Up' : 'Next'}
                </button>

                <div className='text-center mt-2'>
                    {state === 'Login' ? (
                        <p>Don't have an account? <button className='text-purple-700' onClick={() => setState('Sign Up')}>Sign Up</button></p>
                    ) : (
                        <p>Already have an account? <button className='text-purple-700 underline' onClick={() => setState('Login')}>Login</button></p>
                    )}
                </div>
            </form>
        </div>
    )
}

export default RecuiterLogin
