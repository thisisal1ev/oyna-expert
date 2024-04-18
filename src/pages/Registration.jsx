import React from 'react'

//photo
import vkkontakte from '../assets/img/vkkontakte.svg'
import odnoklasniki from '../assets/img/odnoklasniki.svg'
import mailru from '../assets/img/mailru-icon.png'
import yandex from '../assets/img/yandex-icon.png'

const Registration = () => {
  return (
    <div className='py-9'>

      <div className="w-full max-w-base mx-auto px-5">

        <h1 className='mb-6 font-extrabold text-22 sm:text-2xl md:3xl lg:text-4xl xl:text-5xl sm:mb-8 lg:mb-9 xl:mb-11'>Ro&apos;yhatdan o&apos;tish</h1>

        <form name='user-profile' className='border px-5 py-8 rounded-md font-montserrat text-textGrey flex flex-col md:flex-row md:items-center' action="#">

          <div className='space-y-3 text-sm mb-10 md:mb-0 md:mr-[10%] w-full'>

            <label className='flex flex-col space-y-2 font-bold'>
              Email:
              <input className='border p-2 outline-none rounded-md text-mainBlack font-normal focus:border-mainBlack focus:shadow-lg shadow-royaleBlue' type="email" placeholder='Email' />
            </label>

            <label className='flex flex-col space-y-2 font-bold'>
              Parol:
              <a href="#" className='inline-block text-primaryBlue hover:underline font-normal'>Parollingizni unuttingizmi?</a>
              <input className='border p-2 outline-none rounded-md text-mainBlack font-normal focus:border-mainBlack focus:shadow-lg shadow-royaleBlue' type="password" placeholder='********' />
            </label>

            <div className='space-x-2 flex items-center'>
              <button className='inline-block py-1 px-5 w-full font-bold text-center text-white bg-gradient-to-br bg-royaleBlue border-btnBlue from-btnBlue rounded-md border hover:border-royaleBlue hover:bg-royaleBlue hover:bg-gradient-to-t hover:from-royaleBlue'>Kirish</button>
              <button className='inline-block whitespace-nowrap py-1 px-5 font-bold text-center border border-royaleBlue text-royaleBlue rounded-md hover:bg-royaleBlue hover:text-white'>Ro&apos;yhatdan o&apos;tish</button>
            </div>

          </div>
          <div className='md:px-10 md:mx-2'>
            <h3 className='font-bold mb-1'>Shuningdek, siz quyidagilar orqali kirishingiz mumkin:</h3>
            <div className='mb-3 cursor-pointer bg-mainBlack rounded-md text-white max-w-60 py-2 px-3 sm:max-w-72 md:w-full transition-all duration-300 hover:opacity-70'>
              <a href="#" className='inline-flex items-center space-x-4 my-1'>
                <img src={yandex} className='w-8 md:w-10' width={40} height={20} alt="Yandex logo" />
                <span className='inline-block text-sm md:text-base'>Yandex ID orqali kirish</span>
              </a>
            </div>
            <div className='flex items-center space-x-3 mb-7'>
              <a href="#">
                <img src={vkkontakte} className='rounded-md transition-all duration-300 hover:opacity-70' width={40} height={20} alt="vkkontakte" />
              </a>
              <a href="#">
                <img src={mailru} className='rounded-md transition-all duration-300 hover:opacity-70' width={40} height={20} alt="mail.ru" />
              </a>
              <a href="#">
                <img src={odnoklasniki} className='rounded-md transition-all duration-300 hover:opacity-70' width={40} height={20} alt="vkkontakte" />
              </a>
            </div>
            <p>Tizimga kirish va ro'yxatdan o'tish orqali siz <a className='text-royaleBlue underline underline-offset-2 hover:no-underline' href="#">foydalanuvchi shartnomasini qabul qilasiz</a></p>
          </div>
        </form>

      </div>

    </div>
  )
}

export default Registration