import { Link } from 'react-router-dom'

const IntroTwo = () => {
  return (
    <div className='h-full w-full relative'>
    <Link to ="/" className='absolute top-6 left-6' >
      <button className='hover:scale-105'><img src="/src/assets/backbtn.png" alt="back" className='h-[90px]'/></button>
    </Link>
    <div className='absolute bottom-14 left-[50%] -translate-x-1/2'>
        <img src="/src/assets/dialog/dialogueTwo.png" alt="speech2" className='h-40 w-auto  absolute -top-28 -right-32' />
        <img src="/src/assets/monkeyAsset.png" alt="monkey" className='h-[22rem] w-auto left-4' />
    </div>
    <Link to ="/introscreen3" className='absolute bottom-6 right-6' >
      <button className='hover:scale-105'><img src="/src/assets/nextbtn.png" alt="next" className='h-[90px]'/></button>
    </Link>
  </div>
  )
}

export default IntroTwo
