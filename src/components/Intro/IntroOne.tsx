// import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const IntroOne = () => {
 


  return (
    <div className='h-full w-full relative'>
      <div className='absolute bottom-14 left-[50%] -translate-x-1/2'>
          <img src="/src/assets/dialog/dialogueOne.png" alt="speech1" className='h-40 w-auto  absolute -top-28 -right-32' />
          <img src="/src/assets/monkeyAsset.png" alt="monkey" className='h-[22rem] w-auto left-4'/>
      </div>
      <Link to ="/introscreen2" className='absolute bottom-6 right-6' >
        <button className='hover:scale-105 '
        
        >
          <img src="/src/assets/startbtn.png" alt="start" className='h-[90px]'/>
        </button>
      </Link>
    </div>
  )
}

export default IntroOne


{/* <div  */}
// className='relative h-screen w-screen'
// className='bg-[url(/src/assets/bgImage.png)] absolute r bg-contain h-screen w-screen '
// >
{/* <img
src='/src/assets/bgImage.png'
alt='backbtn'
// className='absolute inset-0 bg-contain h-screen w-screen '
/> */}


  
{/* </div> */}