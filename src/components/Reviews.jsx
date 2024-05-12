import React from 'react'
import { Link } from 'react-router-dom'

//photo
import star from '../assets/img/rewiev-star.svg'
import andrey from '../assets/img/andrey.png'
import kristina from '../assets/img/kristina.jpg'
import evgeneya from '../assets/img/evgeniya.jpg'

const Reviews = () => {
  return (
    <div className='py-[6%] bg-grey'>

      <div className="content-container">

        <div className='mb-5 md:mb-6 lg:mb-8 xl:mb-10'>

          <h2 className='text-22 font-extrabold sm:text-26 md:text-3xl mb-3 lg:text-4xl xl:text-44'>Faqat halol sharhlar</h2>

          <p className='text-sm font-montserrat font-medium text-textGrey sm:text-base'>Biz sharhlarni yashirmaymiz yoki sotib olmaymiz, siz mustaqil saytlarga kirib, o'zingiz ko'rishingiz mumkin<br /><a href='https://market.yandex.ru/?roistat_visit=28796084' className='inline-block underline text-red'>Яндекс.Маркет</a>&nbsp;и&nbsp;<a href='https://otzovik.com/?roistat_visit=28796084' className='inline-block underline text-red'>Отзовик</a></p>

        </div>

        <ul className='mb-[3%] grid gap-5 grid-cols-1 lg:grid-cols-3'>

          <li className='flex flex-col h-auto'>

            <div className='bg-white grow relative rounded-xl p-[7%] mb-6 sm:mb-8 lg:mb-9'>

              <div className='flex items-center mb-3 space-x-1'>
                <img width={20} height={20} src={star} alt="review star" />
                <img width={20} height={20} src={star} alt="review star" />
                <img width={20} height={20} src={star} alt="review star" />
                <img width={20} height={20} src={star} alt="review star" />
                <img width={20} height={20} src={star} alt="review star" />
              </div>

              <p className='font-montserrat relative z-1 text-sm grow'>Menga ish juda yoqdi! Yaxshi ishchilar, tez ish. Narx va sifat mos keladi, ular arzon va ehtiyotkorlik bilan qilingan. Katta rahmat))👌🔥</p>

              <div className='w-5 h-5 bg-white absolute mr-4 left-auto right-auto rounded-md rotate-45 -bottom-2'></div>

              <div className='absolute right-3 -bottom-6' data-aos="fade-left">

                <svg className='z-0' xmlns="http://www.w3.org/2000/svg" fill='#f7f7f7' viewBox="0 0 46.86 34.64" width="170" height="100" data-prefix="itycfuwok">
                  <g data-name="Слой 2">
                    <path d="M24.8 30.52v-13a11.67 11.67 0 0 1 2.88-7.06L36.91 1c1.58-1.62 2.41-1.15 1.85 1l-1.9 7.37a3 3 0 0 0 3.09 4h2.8a4.13 4.13 0 0 1 4.12 4.12v13a4.13 4.13 0 0 1-4.12 4.12H28.92a4.13 4.13 0 0 1-4.12-4.09zM4.12 34.64h13.82a4.13 4.13 0 0 0 4.12-4.12v-13a4.13 4.13 0 0 0-4.12-4.12h-2.8a3 3 0 0 1-3.09-4L14 2c.56-2.19-.27-2.66-1.85-1l-9.27 9.42A11.67 11.67 0 0 0 0 17.48v13a4.13 4.13 0 0 0 4.12 4.16z" data-name="Layer 1">
                    </path>
                  </g>
                </svg>

              </div>

            </div>

            <div className='flex flex-col sm:flex-row sm:items-center'>

              <div data-aos="zoom-in" data-aos-duration="800">
                <img className='rounded-full mb-5 sm:mr-7' src={andrey} width={90} height={90} alt="user-img" />
              </div>

              <div>
                <h3 className='font-bold text-xl lg:text-22 mb-1'>Jelyaev Andrey</h3>
                <h4 className='font-medium font-montserrat text-sm'>Kvartirani oynalash</h4>
              </div>

            </div>
          </li>

          <li className='flex flex-col h-auto'>

            <div className='bg-white grow relative rounded-xl p-[7%] mb-6 sm:mb-8 lg:mb-9'>

              <div className='flex items-center mb-3 space-x-1'>
                <img width={20} height={20} src={star} alt="review star" />
                <img width={20} height={20} src={star} alt="review star" />
                <img width={20} height={20} src={star} alt="review star" />
                <img width={20} height={20} src={star} alt="review star" />
                <img width={20} height={20} src={star} alt="review star" />
              </div>

              <p className='font-montserrat relative z-1 text-sm grow'>Men balkonni oynalash va tugatish uchun kompaniyani tanlashda uzoq vaqt o'tkazdim, har xil sharhlarni o'qidim. O'lchovchi Vyacheslav keldi va menga yoqdi</p>

              <div className='w-5 h-5 bg-white absolute mr-4 left-auto right-auto rounded-md rotate-45 -bottom-2'></div>

              <div className='absolute right-3 -bottom-6' data-aos="fade-left">

                <svg className='z-0' xmlns="http://www.w3.org/2000/svg" fill='#f7f7f7' viewBox="0 0 46.86 34.64" width="170" height="100" data-prefix="itycfuwok">
                  <g data-name="Слой 2">
                    <path d="M24.8 30.52v-13a11.67 11.67 0 0 1 2.88-7.06L36.91 1c1.58-1.62 2.41-1.15 1.85 1l-1.9 7.37a3 3 0 0 0 3.09 4h2.8a4.13 4.13 0 0 1 4.12 4.12v13a4.13 4.13 0 0 1-4.12 4.12H28.92a4.13 4.13 0 0 1-4.12-4.09zM4.12 34.64h13.82a4.13 4.13 0 0 0 4.12-4.12v-13a4.13 4.13 0 0 0-4.12-4.12h-2.8a3 3 0 0 1-3.09-4L14 2c.56-2.19-.27-2.66-1.85-1l-9.27 9.42A11.67 11.67 0 0 0 0 17.48v13a4.13 4.13 0 0 0 4.12 4.16z" data-name="Layer 1">
                    </path>
                  </g>
                </svg>

              </div>

            </div>

            <div className='flex flex-col sm:flex-row sm:items-center'>

              <div data-aos="zoom-in" data-aos-duration="800">
                <img className='rounded-full mb-5 sm:mr-7' src={kristina} width={90} height={90} alt="user-img" />
              </div>

              <div>
                <h3 className='font-bold text-xl lg:text-22 mb-1'>Avdeeva Kristina</h3>
                <h4 className='font-medium font-montserrat text-sm'>Uyni oynalash</h4>
              </div>

            </div>

          </li>

          <li className='flex flex-col h-auto'>

            <div className='bg-white relative grow rounded-xl p-[7%] mb-6 sm:mb-8 lg:mb-9'>


              <div className='flex items-center mb-3 space-x-1'>
                <img width={20} height={20} src={star} alt="review star" />
                <img width={20} height={20} src={star} alt="review star" />
                <img width={20} height={20} src={star} alt="review star" />
                <img width={20} height={20} src={star} alt="review star" />
                <img width={20} height={20} src={star} alt="review star" />
              </div>

              <p className='font-montserrat text-sm relative z-1 grow'>Men 2022 yil yanvar oyida balkonlar uchun oynalarni buyurtma qildim - ular buni o'lchashdi, ortiqcha to'lamaslik uchun qanday va nimani tanlashni taklif qilishdi va shu bilan birga menga hamma narsa yoqdi, men juda xursandman!</p>


              <div className='w-5 h-5 bg-white absolute mr-4 left-auto right-auto rounded-md rotate-45 -bottom-2'></div>

              <div className='absolute right-3 -bottom-6' data-aos="fade-left">

                <svg className='z-0' xmlns="http://www.w3.org/2000/svg" fill='#f7f7f7' viewBox="0 0 46.86 34.64" width="170" height="100" data-prefix="itycfuwok">
                  <g data-name="Слой 2">
                    <path d="M24.8 30.52v-13a11.67 11.67 0 0 1 2.88-7.06L36.91 1c1.58-1.62 2.41-1.15 1.85 1l-1.9 7.37a3 3 0 0 0 3.09 4h2.8a4.13 4.13 0 0 1 4.12 4.12v13a4.13 4.13 0 0 1-4.12 4.12H28.92a4.13 4.13 0 0 1-4.12-4.09zM4.12 34.64h13.82a4.13 4.13 0 0 0 4.12-4.12v-13a4.13 4.13 0 0 0-4.12-4.12h-2.8a3 3 0 0 1-3.09-4L14 2c.56-2.19-.27-2.66-1.85-1l-9.27 9.42A11.67 11.67 0 0 0 0 17.48v13a4.13 4.13 0 0 0 4.12 4.16z" data-name="Layer 1">
                    </path>
                  </g>
                </svg>

              </div>

            </div>

            <div className='flex flex-col sm:flex-row sm:items-center'>

              <div data-aos="zoom-in" data-aos-duration="800">
                <img className='rounded-full mb-5 sm:mr-7' src={evgeneya} width={90} height={90} alt="user-img" />
              </div>

              <div>
                <h3 className='font-bold text-xl lg:text-22 mb-1'>Brusnitsina Evgeniya</h3>
                <h4 className='font-medium font-montserrat text-sm'>Balkonni oynalash</h4>
              </div>

            </div>

          </li>

        </ul>

        <Link to='/kompaniya haqida/Biz haqimizda sharhlar' className='inline-block font-semibold text-base underline underline-offset-8 text-textGrey transition-all duration-300 hover:no-underline hover:text-mainBlack'>barcha sharhlarni o&apos;qing</Link>

      </div>

    </div>
  )
}

export default Reviews