import React from 'react'
import Header from './header'
import Tasks from './tasks'

const Home = () => {
  return (
   <div className='h-screen w-full'>
    <Header/>
    <Tasks/>
   </div>
  )
}

export default Home