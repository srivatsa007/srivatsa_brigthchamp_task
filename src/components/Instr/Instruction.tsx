// import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import InstructionCard from './InstructionCard'
import {cardImage1, cardImage2, caseImage3, bullet1, bullet2, bullet3} from "./index"



const Instruction = () => {
  return (
    <div className='h-screen w-full relative flex item-center justify-center'>
        <Link to ="/introscreen3" className='absolute top-6 left-6' >
           <button className='hover:scale-105'><img src="/src/assets/backbtn.png" alt="back" className='h-[90px]'/></button>
        </Link>

    <div className=" flex items-center gap-24 relative z-10">
        <InstructionCard 
            mainImage = {cardImage1}
            numberBullet = {bullet1}
            title ="Select a pink card."
            subTitle ="It has images."
        />
        <InstructionCard
           mainImage = {cardImage2}
           numberBullet = {bullet2}
           title ="Select a blue card."
           subTitle ="It has alphabets."
         />
        <InstructionCard
           mainImage = {caseImage3}
           numberBullet = {bullet3}
           tertTitle ="If they’re same"
           title ="Its a match !"
           subTitle ="otherwise retry :("
           
         />
      
      <div className=' absolute -z-10 p-8'>
          <img src="/src/assets/instruct/line.png" alt="" className='' />
      </div>
      
    </div>
     
      
      <Link to ="/game" className='absolute bottom-6 right-6' >
        <button className='hover:scale-105'><img src="/src/assets/playbtn.png" alt="play" className='h-[90px]'/></button>
      </Link>
    </div>
  )
}

export default Instruction


