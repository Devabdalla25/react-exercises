import React from 'react'
import Navi from './component/Navi'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='p-6 min-h-screen mx-auto bg-gray-100 text-gray-900'>

      <div className='max-w-4xl p-6 mx-auto '>

      <Navi/>
      <main className='py-4'>
        <Outlet/>
      </main>
      </div>

    </div>
  )
}

export default App
