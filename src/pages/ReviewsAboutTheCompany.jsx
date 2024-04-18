import React, { useEffect } from 'react'

//photo
import star from '../assets/img/rewiev-star.svg'
import xmark from '../assets/img/xmark.svg'

//data
import { reviews } from '../data'

const ReviewsAboutTheCompany = () => {
  const [reviewModal, setReviewModal] = React.useState(false);

  useEffect(() => {
    if (reviewModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [reviewModal]);

  const closeModal = (e) => {
    if (e.target.classList.contains('overlay')) setReviewModal(false);
    if (e.key === 'Escape') setReviewModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='py-3%'>

      <div className="content-container">

        <h1 className='mb-3% font-extrabold text-22 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Biz haqimizda sharhlar</h1>

        <ul className='grid mb-4 gap-5 grid-cols-1 md:grid-cols-2 md:mb-6 lg:grid-cols-3'>
          {
            reviews.map((review) => {
              return (
                <li key={review.id} className='flex flex-col h-auto'>

                  <div className='bg-grey grow relative rounded-xl p-[7%] mb-6 sm:mb-8 lg:mb-9'>

                    <div className='flex items-center mb-3 space-x-1'>
                      <img width={20} height={20} src={star} alt="review star" />
                      <img width={20} height={20} src={star} alt="review star" />
                      <img width={20} height={20} src={star} alt="review star" />
                      <img width={20} height={20} src={star} alt="review star" />
                      <img width={20} height={20} src={star} alt="review star" />
                    </div>

                    <p className='font-montserrat relative z-1 text-sm md:text-base grow text-mainBlack'>{review.reviewContext}</p>

                    <div className='w-5 h-5 bg-grey absolute mr-4 left-auto right-auto rounded-md rotate-45 -bottom-2'></div>

                    <div className='absolute right-3 -bottom-6' data-aos="fade-left" data-aos-duration="800">

                      <svg className='z-0' xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 46.86 34.64" width="170" height="100" data-prefix="itycfuwok">
                        <g data-name="Слой 2">
                          <path d="M24.8 30.52v-13a11.67 11.67 0 0 1 2.88-7.06L36.91 1c1.58-1.62 2.41-1.15 1.85 1l-1.9 7.37a3 3 0 0 0 3.09 4h2.8a4.13 4.13 0 0 1 4.12 4.12v13a4.13 4.13 0 0 1-4.12 4.12H28.92a4.13 4.13 0 0 1-4.12-4.09zM4.12 34.64h13.82a4.13 4.13 0 0 0 4.12-4.12v-13a4.13 4.13 0 0 0-4.12-4.12h-2.8a3 3 0 0 1-3.09-4L14 2c.56-2.19-.27-2.66-1.85-1l-9.27 9.42A11.67 11.67 0 0 0 0 17.48v13a4.13 4.13 0 0 0 4.12 4.16z" data-name="Layer 1">
                          </path>
                        </g>
                      </svg>

                    </div>

                  </div>

                  <div className='flex flex-col sm:flex-row sm:items-center'>

                    <div data-aos="zoom-in" data-aos-duration="800">
                      <img className='rounded-full mb-5 sm:mr-7' src={review.reviewerImg} width={90} height={90} alt="user-img" />
                    </div>

                    <div>
                      <h3 className='font-bold text-xl lg:text-22 mb-1'>{review.reviewer}</h3>
                    </div>

                  </div>
                </li>
              )
            })
          }
        </ul>

        <div className='py-6'>
          <button onClick={() => setReviewModal(true)} className='text-white text-lg outline-none bg-primaryBlue font-montserrat py-2 px-5 rounded-md w-full hover:opacity-70 transition-all duration-300 md:w-auto'>Sharx qoldirish</button>
        </div>

      </div>

      {
        reviewModal && <>
          <div className="overlay z-50"></div>

          <div className='flex flex-col items-center justify-center'>

            <div className="fixed top-14 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] p-4 md:px-5  rounded-xl h-auto bg-white z-50 xl:top-10">

              <div className="py-2 text-textGrey mb-2 md:mb-5 mt-5 md:mt-10 flex flex-col">

                <h3 className='font-extrabold text-lg md:text-xl lg:text-2xl font-raleway'>Sharx qoldirish</h3>
                <button onClick={() => setReviewModal(false)} className="absolute top-5 right-4 opacity-30 transition-all duration-500 hover:opacity-100">
                  <img src={xmark} alt="Exit icon" width={40} className='w-6 md:w-10' />
                </button>


              </div>

              <div className="py-1 md:py-3 text-textGrey">

                <form onSubmit={() => alert('Sharx uchun rahmat')} name='modal-question' className='w-full flex flex-col space-y-4 lg:space-y-6'>

                  <label className='flex flex-col space-y-2 font-bold'>
                    Ismingiz:
                    <input className='border p-2 outline-none rounded-md text-textGrey font-normal focus:border-royaleBlue focus:shadow-lg shadow-royaleBlue font-montserrat hover:border-royaleBlue hover:shadow-lg' type="text" placeholder='Ismingiz' required />
                  </label>

                  <label className='flex flex-col space-y-2 font-bold'>
                    Telefon raqamingiz:
                    <input className='border p-2 outline-none rounded-md text-textGrey font-normal focus:border-royaleBlue focus:shadow-lg shadow-royaleBlue font-montserrat hover:border-royaleBlue hover:shadow-lg' type="tel" placeholder='+998 90 000 00 00' pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}" required />
                  </label>

                  <label className='flex flex-col space-y-2 font-bold'>
                    Sharx matnni:
                    <textarea className='border p-2 outline-none rounded-md text-textGrey font-normal focus:border-royaleBlue focus:shadow-lg shadow-royaleBlue font-montserrat hover:border-royaleBlue hover:shadow-lg resize-none' name="review" cols="10" rows="3" required></textarea>
                  </label>

                  <div className='my-1 sm:my-2 flex items-center justify-between pb-4'>

                    <div className="inline-flex items-center">

                      <div className="relative flex items-center p-3 rounded-full cursor-pointer mr-2 lg:mr-5">

                        <input id="ripple-on" type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-textGrey before:opacity-0 before:transition-opacity checked:border-royaleBlue checked:bg-royaleBlue checked:before:bg-royaleBlue hover:before:opacity-10" required />

                        <span
                          className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                            stroke="currentColor" strokeWidth="1">
                            <path fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"></path>
                          </svg>

                        </span>
                      </div>

                    </div>

                    <label className='font-normal text-textGrey text-sm md:text-base hover:text-royaleBlue transition-all duration-300' htmlFor='ripple-on'><a className='underline text-royaleBlue' target='_blank' href="#">Shaxsiy ma&apos;lumotlarimni</a> qayta ishlash shartlarini qabul qilaman *</label>
                  </div>

                  <button type='submit' className='max-w-44 text-left font-montserrat py-2 px-5 md:px-7 text-sm bg-royaleBlue border-2 border-royaleBlue font-medium rounded-md text-white hover:opacity-70 transition-all duration-300'>Sharx qoldirish</button>

                </form>

              </div>

            </div>

          </div>

        </>
      }

    </div>
  )
}

export default ReviewsAboutTheCompany