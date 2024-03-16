import React from 'react'


const Game = () => {
  return (
    <div className='h-screen w-full relative flex item-center justify-center'>
        <div className='h-fit w-auto flex gap-16 p-40'>
            <div className='grid grid-cols-3 grid-rows-2 gap-4'>
                <img src="src/assets/cards/lcardfront.png" alt="" className=''/>
                <img src="src/assets/cards/lcardfront.png" alt="" className=''/>
                <img src="src/assets/cards/lcardfront.png" alt="" className=''/>
                <img src="src/assets/cards/lcardfront.png" alt="" className=''/>
                <img src="src/assets/cards/lcardfront.png" alt="" className=''/>
                <img src="src/assets/cards/lcardfront.png" alt="" className=''/>
            </div>

            <div className='grid grid-cols-3 grid-rows-2 gap-4'>
                <img src="src/assets/cards/lcardfront.png" alt="" className=''/>
                <img src="src/assets/cards/lcardfront.png" alt="" className=''/>
                <img src="src/assets/cards/lcardfront.png" alt="" className=''/>
                <img src="src/assets/cards/lcardfront.png" alt="" className=''/>
                <img src="src/assets/cards/lcardfront.png" alt="" className=''/>
                <img src="src/assets/cards/lcardfront.png" alt="" className=''/>
            </div>

        </div>
    </div>
  )
}

export default Game