import React from 'react'

//photo
import whatsapp from '../assets/img/whatsapp-contact-img.svg'
import telegram from '../assets/img/telegram-contact-img.svg'
import vkkontakte from '../assets/img/vkkontakte.svg'
import odnoklasniki from '../assets/img/odnoklasniki.svg'
import rutube from '../assets/img/rutube.svg'

const Contacts = () => {
  return (
    <div className='py-9'>

      <div className="content-container flex flex-col lg:items-center lg:justify-between lg:flex-row">

        <div className='mb-10 mr-0 lg:mb-0 lg:mr-10'>

          <h1 className='mb-6 font-extrabold text-22 sm:text-2xl md:3xl lg:text-4xl xl:text-5xl sm:mb-8 lg:mb-9 xl:mb-11'>Kontaktlar</h1>

          <ul className='space-y-3 font-montserrat xl:space-y-5'>

            <li className='flex flex-col mb-2 md:flex-row md:items-center'>
              <a href="tel:+998900000000" className='font-bold text-xl mr-4 text-textGrey mb-2'>+998 (90) 000 00 00</a>

              <div className='flex items-center space-x-1'>
                <a href="#">
                  <img className='transition-all duration-300 hover:opacity-70' src={whatsapp} width={40} height={20} alt="whatsapp" />
                </a>
                <a href="https://t.me/thisisal1ev" target='_blank'>
                  <img className='transition-all duration-300 hover:opacity-70' src={telegram} width={40} height={20} alt="telegram" />
                </a>
              </div>

            </li>

            <li className='text-textGrey text-lg'>Dushanba-Juma: 11:00 dan 21:00 gacha</li>
            <li className='text-textGrey text-lg'>Shanba-Yakshanba: Dam olish kunlari</li>
            <li className='text-textGrey text-lg'>Andijon viloyati, Baliqchi tumani, Chinobod shaharchasi</li>

            <li className='text-primaryBlue text-lg'>
              <a href="mailto:aaalievvv1">aaalievvv1@gmail.com</a>
            </li>

            <li className='text-textGrey text-lg'>ИНН 000000000 ОГРН 000000000</li>

            <li className='flex items-center space-x-2'>
              <a href="#">
                <img className='rounded-md transition-all duration-300 hover:opacity-70' width={40} height={20} src={vkkontakte} alt="vkkontakte" />
              </a>
              <a href="#">
                <img className='rounded-md transition-all duration-300 hover:opacity-70' width={40} height={20} src={odnoklasniki} alt="odnoklasniki" />
              </a>
              <a href="#">
                <img className='rounded-md transition-all duration-300 hover:opacity-70' width={40} height={20} src={rutube} alt="rutube" />
              </a>
            </li>

          </ul>

        </div>

        <iframe className='w-full h-96 lg:h-[600px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12067.141075987674!2d71.96337355597498!3d40.87658636659705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bca0b64ef43357%3A0x8d7798d2806477f0!2zQ2hpbm9ib2QsINCQ0L3QtNC40LbQsNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1712827247738!5m2!1sru!2s" width="800" height="600" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      </div>



    </div>
  )
}

export default Contacts