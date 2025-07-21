import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../Context/AppContext'
import { motion } from "motion/react"
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    const [state,setState]=useState('Login')
    const {setshowLogin,backendUrl,setToken,setUser} = useContext(AppContext)
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    
    const onSubmitHandler=async(e)=>{
        e.preventDefault();
        try{
            if(state=== 'Login'){
                const {data} = await axios.post(backendUrl + '/api/user/login', {email,password})
                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token',data.token)
                    setshowLogin(false)
                }else{
                    toast.error(data.message)
                }
            }else{
                const {data} = await axios.post(backendUrl + '/api/user/register', {name,email,password})
                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token',data.token)
                    setshowLogin(false)
                }else{
                    toast.error(data.message)
                }

            }

        }
        catch(error){
            toast.error(error.message)
                }
        };


    useEffect(()=>{
        document.body.style.overflow='hidden';
        return ()=>{
            document.body.style.overflow='unset';
        };
    },[]);
  return (
    <div className='fixed left-0 right-0 bottom-0 top-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <motion.form onSubmit={onSubmitHandler}
        initial={{opacity:0.2 , y:50}}
        transition={{duration:0.3}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        
        className='relative bg-white p-10 rounded-xl text-slate-900'>
            <h1 className='text-center text-2xl font-medium text-gray-700'>{state}</h1>
            <p className='text-sm ml-3'>Welcome back! Please login to continue</p>
            {state!=="Login" && <div className='border px-6 py-2 flex items-center gap-3 rounded-md mt-5'>
                <img className='h-5' src={assets.profile_icon} alt="" />
                <input onChange={e=>setName(e.target.value)} value={name} className='outline-none text-sm' type='text' placeholder='Full Name' required/>
            </div>}
            <div className='border px-6 py-2 flex items-center gap-3 rounded-md mt-5'>
                <img className='h-4' src={assets.email_icon} alt="" />
                <input onChange={e=>setEmail(e.target.value)} value={email} className='outline-none text-sm' type='email' placeholder='Email Id' required/>
            </div>
            <div className='border px-6 py-2 flex items-center gap-3 rounded-md mt-5'>
                <img className='h-5' src={assets.lock_icon} alt="" />
                <input onChange={e=>setPassword(e.target.value)} value={password} className='outline-none text-sm' type='password' placeholder='Password' required/>
            </div>
            <p className='text-blue-600 my-4 text-sm cursor-pointer'>Forgot Password?</p>
            <button className='bg-blue-600 w-full text-white rounded-full py-2'>{state == "Login" ?'Login' : 'Create account'}</button>

            {state =="Login"?<p className='text-center mt-4'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up</span></p>
            :<p className='text-center mt-4'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}>Login</span></p>}
            <img  onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" className='absolute cursor-pointer top-5 right-5'/>
        </motion.form>
      
    </div>
  );
};



export default Login
