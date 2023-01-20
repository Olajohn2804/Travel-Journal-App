import React from 'react'
import worldlogo from '../Images/worldLogo.svg'
const Header = () => {
  return (
    <>
        <nav className='navbar'>
            <img src={worldlogo} alt="worldlogo" className='navbar-logo' /> 
            <p className='navbar-text'>my travel journal.</p>
        </nav>    
    </>

  )
}

export default Header