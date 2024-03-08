import React from 'react'
import Header from './header'
import Tasks from './tasks'

const Home = (props) => {
  return (
   <div className='h-screen w-full'>
    <Header/>
    <Tasks propsfunction={props}/>
   </div>
  )
}

export default Home