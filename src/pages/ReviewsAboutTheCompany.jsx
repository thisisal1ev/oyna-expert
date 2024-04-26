import React, { useEffect } from 'react'

//photo
import star from '../assets/img/rewiev-star.svg'

//data
import { reviews } from '../data'
import ReviewModal from '../components/ReviewModal'

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
        reviewModal && <ReviewModal setReviewModal={setReviewModal} />
      }

    </div>
  )
}

export default ReviewsAboutTheCompany