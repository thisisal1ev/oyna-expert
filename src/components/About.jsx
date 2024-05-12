import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='py-9'>
      <div className="w-full max-w-base mx-auto px-5">
        <div className='space-y-3 mb-5 sm:mb-6 md:mb-9'>
          <h2 className='font-extrabold text-22 sm:text-2xl md:text-3xl xl:text-44 xl:leading-tight'>Ishlab chiqarish kompaniyasi 2023 yil iyul oyida tashkil etilgan</h2>
          <p className='font-montserrat font-medium text-base text-textGrey'>Eng yaxshi sotib olish shartlari bilan eng yaxshi oyna sifati</p>
        </div>
        <div className='space-y-3 mb-6  md:mb-9 lg:mb-8'>
          <h3 className='font-bold text-lg md:text-xl lg:text-22'>Benuqson xizmat - kompaniyaning imzosi</h3>
          <p className='font-montserrat font-medium text-base text-textGrey'>Biz kunlik ish rejimini ta&apos;minlaymiz. Malakali menejerlar har doim yordam ko&apos;rsatishga va yuzaga keladigan har qanday savollarga javob berishga tayyor.</p>
        </div>
        <Link to='/kompaniya haqida' className='inline-block font-montserrat font-semibold text-base underline underline-offset-8 text-textGrey transition-all duration-300 hover:no-underline hover:text-mainBlack'>Batafsil</Link>
      </div>
    </div>)
}

export default About