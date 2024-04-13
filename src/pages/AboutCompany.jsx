import React from 'react'
import { Link } from 'react-router-dom'

const AboutCompany = () => {
  return (
    <div className='py-3%'>

      <div className="content-container">

        <h1 className='mb-3% font-extrabold text-22 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Kompaniya haqida</h1>

        <div className='mb-6 space-y-4 lg:space-y-6 text-textGrey font-montserrat'>

          <p className='md:text-lg xl:text-xl'>
            Olisda, olisda, so‘z tog‘lari ortida, unli va undoshlar yurtida baliq matnlari yashaydi. Hammadan ajralib, ular katta til okeani bo&apos;lgan Semantika qirg&apos;og&apos;idagi tom ma&apos;nodagi uylarda yashaydilar. Kichik Dal daryosi butun mamlakat bo&apos;ylab oqadi va uni barcha kerakli qoidalar bilan ta&apos;minlaydi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas. Bir kuni Lorem ipsum deb nomlangan baliq matnining kichik bir qatori grammatikaning katta olamiga kirishga qaror qildi.
          </p>

          <p className='md:text-lg xl:text-xl'>
            Bu paradigmatik mamlakat bo&apos;lib, unda takliflar sizning og&apos;zingizga tushadi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas. Bir kuni baliq matnining kichik bir qatori katta grammatika olamiga kirishga qaror qildi. Kichik Dal daryosi butun mamlakat bo&apos;ylab oqadi va uni barcha kerakli qoidalar bilan ta&apos;minlaydi. Hatto qudratli tinish belgilari ham orfografik hayot tarzini olib boradigan baliq matnlari ustidan hech qanday kuchga ega emas.
          </p>

        </div>


        <div className='space-y-3 py-6 flex flex-col items-start flex-wrap'>

          <Link to='/kompaniya haqida/bizning jamoamiz' className='link'>

            <span>Bizning jamoamiz</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="#7f7f7f" d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.552.552 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.552.552 0 0 1 0-.771">
              </path>
            </svg>

          </Link>

          <Link to='/kompaniya haqida/biz haqimizda sharhlar' className='link'>

            <span>Biz haqimizda sharhlar</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="#7f7f7f" d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.552.552 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.552.552 0 0 1 0-.771">
              </path>
            </svg>

          </Link>

        </div>

      </div>

    </div>
  )
}

export default AboutCompany