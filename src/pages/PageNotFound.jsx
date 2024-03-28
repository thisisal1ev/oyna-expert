import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'

const PageNotFound = () => {
  return (
    <div className='py-10'>
      <BreadCrumbs />
      <div className='w-full max-w-base mx-auto px-5'>
        <h1 className='mb-5 font-extrabold text-[20px] sm:text-[25px] md:text-3xl sm:mb-6 lg:mb-8 lg:text-4xl'>Sahifa topilmadi</h1>
        <h2 className='my-4 font-bold font-montserrat text-mainGrey text-xl md:text-[32px]'>404 Not Found</h2>
      </div>
    </div>
  )
}

export default PageNotFound