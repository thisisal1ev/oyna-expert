import React from 'react'
import { Link } from 'react-router-dom'

//photo
import sertifikaty from '../assets/img/sertifikaty.webp'

const Sertific = () => {
  return (
    <div className='py-9'>

      <div className="w-full max-w-base mx-auto px-5">

        <h1 className='mb-6 font-extrabold text-22 sm:text-2xl md:3xl lg:text-4xl xl:text-5xl sm:mb-8 lg:mb-9 xl:mb-11'>Sertifikatlar</h1>

        <div id='gallery--mixed-source' className='grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          <Link className='inline-block cursor-zoom-in'>
            <img src={sertifikaty} alt="sertifikat" />
          </Link>
          <Link className='inline-block cursor-zoom-in'>
            <img src={sertifikaty} alt="sertifikat" />
          </Link>
          <Link className='inline-block cursor-zoom-in'>
            <img src={sertifikaty} alt="sertifikat" />
          </Link>
          <Link className='inline-block cursor-zoom-in'>
            <img src={sertifikaty} alt="sertifikat" />
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Sertific