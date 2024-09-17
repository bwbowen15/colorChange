import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          
          <div className='flex flex-wrap justify-center gap-3-shadow-large 
      bg-white px-3 py-2 rounded-3xl'>

        <h2 className='outline-none px-4 py-1 rounded-full shadow-lg text-black'>Select a color</h2>

        <button className='outline-none px-4 py-1 rounded-full
        shadow-lg text-black'
        style={{backgroundColor: 'red'}}
        onClick={() => setColor('red')}>
          red
        </button>

        <button className='outline-none px-4 py-1 rounded-full
        shadow-lg text-black' style={{backgroundColor: 'green'}}
        onClick={() => setColor('green')}>
          Green
        </button>
        <button className='outline-none px-4 py-1 rounded-full
        shadow-lg text-black' style={{backgroundColor: 'blue'}}
        onClick={() => setColor('blue')}>
          Blue
        </button>
        <button className='outline-none px-4 py-1 rounded-full
        shadow-lg text-black' style={{backgroundColor: 'violet'}}
        onClick={() => setColor('violet')}>
          Violet
        </button>
        <button className='outline-none px-4 py-1 rounded-full
        shadow-lg text-black' style={{backgroundColor: 'orange'}}
        onClick={() => setColor('orange')}>
          Orange
        </button>



      </div>

        </div>

      </div>
    </>
  )
}

export default App
