import React, { useState } from 'react'

const CTA = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="py-9">
      <div className="w-full max-w-base mx-auto px-5" data-aos="fade-up" data-aos-anchor-placement="center" data-aos-easing="ease-in" data-aos-duration="1000">
        <form onSubmit={() => { checked && alert('Xat ketti'), !checked && alert('Iltimos bizning siyosatimiz qabul qiling!') }} className='px-8 py-10 w-full bg-lightGreen rounded-xl text-white xl:flex items-center justify-between xl:p-10'>
          <div className='xl:mr-12'>
            <h2 className='mb-2 text-2xl font-extrabold text-center md:text-3xl lg:text-32 lg:text-left xl:text-4xl'>Aniq hisob-kitob qilishni xohlaysizmi?</h2>
            <p className='text-sm text-center font-medium opacity-70 lg:text-left'>So'rov qoldiring va biz 10 daqiqa ichida qayta qo'ng'iroq qilamiz va buyurtmangizni hisoblaymiz</p>
          </div>
          <div className='xl:w-[525px]'>
            <div className='flex flex-col my-3'>
              <input className='py-4 text-sm bg-transparent font-montserrat border-b-2 outline-none focus:outline-none border-white border-opacity-50 transition-all duration-300 placeholder:text-white' placeholder='Ismingiz' type="text" required />
              <input className='py-4 text-sm bg-transparent font-montserrat border-b-2 outline-none focus:outline-none border-white border-opacity-50 transition-all duration-300 placeholder:text-white' placeholder='Telefon ragamingiz' pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}" type="tel" required />
            </div>
            <div className='md:flex items-center justify-between md:pt-2'>
              <div className='my-2 flex items-start md:mr-10 md:w-[500px] xl:w-64'>
                <input onChange={() => setChecked(true)} width={20} height={20} className='w-10 h-5 mt-1 mr-3 bg-transparent cursor-pointer outline-none focus:outline-none xl:mr-3' id='check' type="checkbox" />
                <label className='font-normal text-sm font-montserrat' htmlFor='check'>Men shaxsiy ma'lumotlarni qayta ishlash va <a className='underline' target='_blank' href="#">maxfiylik siyosatiga roziman.</a></label>
              </div>
              <div className='flex items-center justify-center md:block'>
                <button type='submit' onSubmit={() => alert('Xat ketti')} className='inline-block py-7 px-9 w-52 bg-white text-mainBlack border-2 border-lightGreen font-bold font-raleway rounded-md hover:bg-lightGreen hover:text-white hover:border-white transition-all duration-500'>So'rov qoldirish</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>)
}

export default CTA