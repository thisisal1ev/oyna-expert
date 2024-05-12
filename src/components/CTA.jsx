import React, { useState } from 'react'

const CTA = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="py-9">

      <div className="w-full max-w-base mx-auto px-5">

        <form onSubmit={() => { checked && alert('Xat ketti'), !checked && alert('Iltimos bizning siyosatimiz qabul qiling!') }} className='px-8 py-10 w-full bg-lightGreen rounded-xl text-white xl:flex items-center justify-between xl:p-10'>

          <div className='xl:mr-12'>

            <h2 className='mb-2 text-2xl font-extrabold text-center md:text-3xl lg:text-32 lg:text-left xl:text-4xl'>Aniq hisob-kitob qilishni xohlaysizmi?</h2>
            <p className='text-sm text-center font-medium text-white lg:text-left'>So&apos;rov qoldiring va biz 10 daqiqa ichida qayta qo&apos;ng&apos;iroq qilamiz va buyurtmangizni hisoblaymiz</p>

          </div>

          <div className='xl:w-[525px]'>

            <div className='flex flex-col my-3'>

              <input className='py-4 text-sm bg-transparent font-montserrat border-b-2 outline-none focus:outline-none border-white border-opacity-50 transition-all duration-300 placeholder:text-white' placeholder='Ismingiz' type="text" required />
              <input className='py-4 text-sm bg-transparent font-montserrat border-b-2 outline-none focus:outline-none border-white border-opacity-50 transition-all duration-300 placeholder:text-white' placeholder='Telefon ragamingiz' pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}" type="tel" required />

            </div>

            <div className='md:flex items-center justify-between md:pt-2'>

              <div className='my-2 flex items-center md:mr-10 md:w-[500px] xl:w-64'>

                <div className="relative flex items-center p-3 rounded-full cursor-pointer mr-1">

                  <input onChange={() => setChecked(true)} id="ripple-on on" type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 outline-none cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-textGrey before:opacity-0 before:transition-opacity checked:border-white checked:bg-white checked:before:bg-lightGreen hover:before:opacity-10" required/>
                  <span
                    className="absolute text-lightGreen transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                      stroke="currentColor" strokeWidth="1">
                      <path fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"></path>
                    </svg>
                  </span>

                </div>

                <label className='font-normal text-sm font-montserrat' htmlFor='ripple-on on'>Men shaxsiy ma&apos;lumotlarni qayta ishlash va <a className='underline' target='_blank' href="#">maxfiylik siyosatiga roziman.</a></label>

              </div>

              <div className='flex items-center justify-center md:block'>

                <button type='submit' onSubmit={() => alert('Xat ketti')} className='inline-block py-7 px-9 w-52 bg-white text-mainBlack border-2 border-lightGreen font-bold font-raleway rounded-md hover:bg-lightGreen hover:text-white hover:border-white transition-all duration-500'>So&apos;rov qoldirish</button>

              </div>

            </div>

          </div>

        </form>

      </div>

    </div>
  )
}

export default CTA