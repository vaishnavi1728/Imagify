import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from "motion/react"
import { AppContext } from '../Context/AppContext';

const Result = () => {
  const [image,setIMage]=useState(assets.sample_img_1)
  const [isImageLoaded,setIsImageLoaded]=useState(false)
  const [loading, setLoading]=useState(false)
  const [input , setInput]=useState('')

  const {generateImage}= useContext(AppContext)
  const onSubmitHandler=async(e)=>{
    e.preventDefault()
    setLoading(true)
    if(input){
      const image=await generateImage(input)
      if(image){
        setIsImageLoaded(true)
        setIMage(image)
      }
    }
    setLoading(false)
  }
  return (
    <motion.form 
     initial={{opacity:0.2 , y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    onSubmit={onSubmitHandler} action="" className='flex flex-col min-h-[90vh] justify-center items-center'>
      <div>
        <div className="relative">
          <img src={image} alt="" className=" h-75 max-w-sm rounded" />
            <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading?'w-full transition-all duration-[10s]':'w-0'}`}></span>
        </div>
        <p className={!loading?'hidden':''}>Loading....</p>
      </div>
        {!isImageLoaded &&
      <div className='flex w-full max-w-xl text-white bg-neutral-500 text-sm p-0.5 mt-10 rounded-full'>
      <input
       onChange={e=>setInput(e.target.value)} value={input}
       type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20' />
      <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white'>Generate</button>
    </div>
}
{isImageLoaded &&
    <div  className='flex flex-wrap gap-2 justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
      <p className='border border-zinc-600 text-black px-8 py-3 rounded-full cursor-pointer' onClick={()=>{setIsImageLoaded(false)}}>Generate Another</p>
      <a className='border bg-zinc-600 px-8 py-3 rounded-full cursor-pointer' href={image} download >Download</a>
    </div>
}
    </motion.form>
  );
};

export default Result;
