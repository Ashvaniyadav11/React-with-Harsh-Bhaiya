import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
  return (
    <div className='w-full h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center'>
        
        <div className='w-60 h-60 rounded-md overflow-hidden  bg-zinc-100 p-4'>
            <h1 className='text-center font-semibold'>Counter</h1>
            <div className='mt-12 text-center bg-yellow-100 text-3xl font-bold'>
                {count}
            </div>
            <div className='mt-4 flex flex-col'>
                <button onClick={()=>setCount(count + 1)} className='px-3 -py-1 mt-5 rounded-full bg-blue-300 transition-colors duration-200 hover:bg-green-700'>Increament</button>
                <button onClick={()=>setCount(count-1)} className='px-3 -py-1 mt-5 rounded-full bg-red-300 transition-colors duration-200 hover:bg-green-700'>Dcreament</button>
            </div>
        </div>
    </div>
  )
}

export default Counter