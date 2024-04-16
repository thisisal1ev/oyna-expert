import React from 'react'

//photo
import photo1 from '../assets/img/photo-1.jpg'
import photo2 from '../assets/img/photo-2.jpg'
import photo3 from '../assets/img/photo-3.jpg'
import photo4 from '../assets/img/photo-4.jpg'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <div className='py-9'>
      <div className="content-container">
        <div className='mb-6' data-aos="fade-up">
          <h2 className='text-22 font-extrabold sm:text-26 md:text-3xl mb-3 lg:text-4xl xl:text-44'>3000 dan ortiq derazalar o'rnatilgan</h2>
          <p className='text-sm font-montserrat font-medium text-textGrey sm:text-base'>Mahsulotlarimizni ishlab chiqarish uchun biz faqat eng yuqori sifatli original Yevropa komponentlaridan foydalanamiz.</p>
        </div>
        <div className='mb-6 md:mb-8 xl:mb-10 grid gap-10 grid-cols-1 md:grid-cols-2'>
          <img className='w-full h-full rounded-xl cursor-pointer' src={photo1} alt="photo" />
          <img className='w-full h-full rounded-xl cursor-pointer' src={photo2} alt="photo" />
          <img className='w-full h-full rounded-xl cursor-pointer' src={photo3} alt="photo" />
          <img className='w-full h-full rounded-xl cursor-pointer' src={photo4} alt="photo" />
        </div>

        <Link to='/' className='inline-block font-montserrat pt-6 font-semibold text-base underline underline-offset-8 text-textGrey transition-all duration-300 hover:no-underline hover:text-mainBlack'>barcha fotosuratlarni ko'ring</Link>
      </div>
    </div>
  )
}

export default Gallery