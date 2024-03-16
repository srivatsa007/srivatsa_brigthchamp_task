
type Props = {
    mainImage: string,
    numberBullet: string, 
    title: string,
    subTitle: string,
    tertTitle?: string
}

const InstructionCard = ({mainImage, numberBullet, tertTitle, title, subTitle}: Props) => {
  return (
    <div className='bg-white rounded-3xl h-96 aspect-[3/4] relative flex flex-col items-center justify-around p-8'>   
          <img src={mainImage} alt="monkey" className='h-44'/>
          <div className='flex flex-col items-center text-center'>
            {
                tertTitle &&  <p className=' font-extrabold text-[#A6C930] '>{tertTitle}</p>
            }
            
            <h1 className='text-3xl font-extrabold text-[#11AEC6] '>{title}</h1>
            <p className=' font-extrabold text-[#A6C930] '> {subTitle}</p>
          </div>
          
            <img src={numberBullet} alt="" className='absolute top-1/2 left-0 h-12' />
          
      </div>
  )
}

export default InstructionCard