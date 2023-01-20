import React from 'react'
import Header from './Components/Header'
import Data from '../src/Data.js'
import Hero from './Components/Hero'
const App = () => {
  const travels = Data.map((data,index)=>{
    return(
      <Hero
        key={index}
        {...data}
      />
    )
  })
  return (
    <>
      <Header/>
      <div className="hero-wrapper">
        {travels}
      </div>
    </>
  )
}

export default App