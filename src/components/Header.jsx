import React from 'react'
import { NavLink } from 'react-router-dom'

// photo
import location from '../assets/img/location.svg'

const Header = () => {
  return (
    <header className='py-5'>
      <div className='flex items-center justify-between'>
        <img src={location} alt="location" className='mt-5' />
        <p>Shahar: Andijon</p>
      </div>

      <nav className='flex items-center justify-between space-x-4'>
        <NavLink className='font-semibold'>Aksiyalar</NavLink>
      </nav>
    </header>
  )
}

export default Header