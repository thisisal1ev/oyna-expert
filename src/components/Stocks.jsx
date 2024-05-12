import React from 'react'
import { Link } from 'react-router-dom'

const Stocks = () => {
  return (
    <div className='py-9'>

      <div className="w-full max-w-base mx-auto px-5">

        <h2 className='mb-6 font-extrabold text-22 sm:text-2xl md:text-3xl lg:text-4xl xl:text-44 sm:mb-8 lg:mb-9 xl:mb-11'>Aksiyalar va derazalar uchun chegirmalar</h2>

        <div className='flex flex-col flex-wrap space-y-4 lg:space-y-0 lg:items-center lg:flex-row lg:justify-between'>

          <div className='rounded-xl'>
            <Link to='/aksiyalar' className='inline-block relative z-1 overflow-hidden rounded-xl'>
              <div className='bg-sobaka grow bg-cover bg-no-repeat hover:scale-105 transition-all duration-700'>
                <div className='text-white bg-img w-full'>
                  <div className='flex flex-col space-y-4 pr-12 pl-12 py-10 sm:px-14 sm:py-12 md:py-20 lg:px-[33px] xl:pr-32 xl:pl-12 xl:pt-36 xl:pb-8'>
                    <span className='inline-block font-montserrat text-sm font-medium w-48 bg-orange py-1 px-3 rounded-md'>9 aprelgacha chegirma</span>
                    <span className='inline-block text-22 font-bold sm:text-28 md:text-3xl lg:text-4xl'>Tugatish uchun 15% gacha</span>
                    <span className='inline-block font-montserrat text-sm font-medium md:text-lg'>Va shisha uchun 30% gacha</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className='rounded-xl'>
            <Link to='/aksiyalar' className='inline-block relative z-1 overflow-hidden rounded-xl'>
              <div className='bg-koshka grow bg-cover bg-no-repeat hover:scale-105 transition-all duration-700'>
                <div className='text-white bg-img w-full'>
                  <div className='flex flex-col space-y-4 px-10 py-10 sm:px-11 sm:py-12 md:py-20 lg:px-5 xl:pr-28 xl:pl-10 xl:pt-36 xl:pb-8'>
                    <span className='inline-block font-montserrat text-sm font-medium w-32 bg-orange py-1 px-3 rounded-md'>Foydali taklif</span>
                    <span className='inline-block text-22 font-bold sm:text-28 md:text-3xl lg:text-4xl'>Oynalar uchun 8% chegirma</span>
                    <span className='inline-block font-montserrat text-sm font-medium md:text-lg'>O'lchov buyurtma berish kunida</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Stocks