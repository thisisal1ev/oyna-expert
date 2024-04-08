import React from 'react'
import { Link } from 'react-router-dom'

//photo
import otdelka from '../assets/img/sobaka.jpg'
import skidka from '../assets/img/koshka.jpg'

const Stocks = () => {
  return (
    <div className='py-9'>
      <div className="w-full max-w-base mx-auto px-5">
        <h2 className='mb-6 font-extrabold text-22 sm:text-2xl md:3xl lg:text-4xl xl:text-38 sm:mb-8 lg:mb-9 xl:mb-11' data-aos="fade-up" data-aos-anchor-placement="center" data-aos-easing="ease-in" data-aos-duration="1000">Aktsiyalar va derazalar uchun chegirmalar</h2>

        <div className='flex flex-col lg:items-center lg:flex-row lg:justify-between'>
          <div className='rounded-xl'>
            <Link to='/' className='inline-block relative z-1 overflow-hidden rounded-xl'>
              <div className='bg-sobaka bg-cover bg-no-repeat hover:scale-110 transition-all duration-700'>
                <div className='text-white bg-img'>
                  <div className='flex flex-col space-y-4 xl:pr-40 xl:pl-10 xl:pt-36 xl:pb-8'>
                    <span className='inline-block font-montserrat text-sm font-medium w-44 bg-orange py-1 px-3 rounded-md'>9 aprelgacha chegirma</span>
                    <span className='inline-block text-22 font-bold sm:text-28 md:text-3xl lg:text-4xl'>Tugatish uchun 15% gacha</span>
                    <span className='inline-block font-montserrat text-sm font-medium md:text-lg'>Va shisha uchun 30% gacha</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className='rounded-xl'>
            <Link to='/' className='inline-block relative z-1 overflow-hidden rounded-xl'>
              <div className='bg-koshka bg-cover bg-no-repeat hover:scale-110 transition-all duration-700'>
                <div className='text-white bg-img'>
                  <div className='flex flex-col space-y-4 xl:pr-40 xl:pl-10 xl:pt-36 xl:pb-8'>
                    <span className='inline-block font-montserrat text-sm font-medium w-28 bg-orange py-1 px-3 rounded-md'>Foydali taklif</span>
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