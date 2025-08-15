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

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(state === 'Sign Up' && !isTextDataSubmitted){
            setIsTextDataSubmitted(true);
        }
    }
    const {setShowRecruiterLogin} = useContext(AppContext);
    
    useEffect(()=> {
        document.body.style.overflow= 'hidden'

        return() => {
            document.body.style.overflow= 'unset'
        }
    },[] )

    return (
    <div className='bg-black-100 absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex items-center justify-center overflow-visible'>
        <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-lg flex flex-col gap-6 text-slate-500'>
            <h1 className='flex items-center justify-center text-2xl text-neutral-700'>Recruiter {state}</h1>
            <p className='flex text-sm items-center text-wrap justify-center'>Welcome Back! Please Sign In to Continue</p>
            {state === "Sign Up" && isTextDataSubmitted ? 
                <>
                    <div className='flex items-center justify-center g-4 my-10'>
                        <label htmlFor="image">
                            <img className='w-16 rounded-full mr-5 cursor-pointer'src={image ? URL.createObjectURL(image): assets.upload_area} alt="upload" />
                            <input onChange={e => setImage(e.target.files[0])} type="file" id='image' hidden />
                        </label>
                        <p>Upload Company <br /> Logo</p>
                    </div>
                </>:
            <>
            {state !== 'Login' && (
                <div className='flex items-center gap-3 border border-purple-500  rounded-lg px-3 py-2 hover:border-2'>
                    <img src={assets.person_icon} alt="" />
                    <input type="text"  placeholder='Company Name' className='focus:outline-none' required onChange={e => setName(e.target.value)} value={name}/>
                </div>
            )}
                
                <div className='flex items-center gap-3 border border-purple-500  rounded-lg px-3 py-2 hover:border-2'>
                    <img src={assets.email_icon} alt="" />
                    <input type="email"  placeholder='Email Id' className='focus:outline-none' required onChange={e => setEmail(e.target.value)} value={email}/>
                </div>
                <div className='flex items-center gap-3 border border-purple-500  rounded-lg px-3 py-2 hover:border-2'>
                    <img src={assets.person_icon} alt="" />
                    <input type="password"  placeholder='Password' className='focus:outline-none' required onChange={e => setPassword(e.target.value)} value={password}/>
                </div>
                
                
            </>
            
           
            }
            {
                state === 'Login'? <p className='text-sm text-purple-700 underline my-4 cursor-pointer'>forgot Password?</p>:null
            }

            

            <button type='submit' className='bg-purple-700 text-white px-8 py-2 rounded w-3/4 items-center justify-center mx-auto '>
                {state === 'Login' ? 'Login' : isTextDataSubmitted? 'Sign Up':'Next'}
            </button>
            <div>
                {
                    state === 'Login'?(
                        <p  className='flex items-center justify-center '>Don't have an account?
                        <button className='text-purple-700' onClick={()=>(setState('Sign Up'))}>SignUp</button></p>
                    ):(
                        <p className='flex items-center justify-center' >Already have an account?
                        <button className='text-purple-700 underline' onClick={()=>(setState('Login'))}>Login</button></p>
                    )            
                }
            
            </div>
            <img src={assets.cross_icon} className='absolute top-5 right-5 z-20 cursor-pointer' onClick={e=>setShowRecruiterLogin(false)} alt="" />
        </form>
        
    </div>
  )
}

export default RecuiterLogin