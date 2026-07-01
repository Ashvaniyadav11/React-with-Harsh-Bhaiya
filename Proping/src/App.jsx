import React from 'react'
import Card from './Components/Card'
import Contacts from './Components/Contacts'


function App() {
  return (
    <div className='w-auto h-auto'>
      <h1 className='text-9xl font-bold flex items-center justify-center bg-yellow-400'>Components</h1>
      <hr />
      <Card/>
      <hr />
      <h1 className='font-semibold  flex items-center justify-center'>Discover quality products, unbeatable prices, and fast delivery. Shop confidently with secure payments and exceptional customer support.</h1>
      <Contacts/>
    </div>

  )
}

export default App