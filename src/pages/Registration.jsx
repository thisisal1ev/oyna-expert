//photo
import vkkontakte from '../assets/img/vkkontakte.svg'
import odnoklasniki from '../assets/img/odnoklasniki.svg'

const Registration = () => {
  return (
    <div className='py-9'>
      <div className="w-full max-w-base mx-auto px-5">
        <h1 className='mb-6 font-extrabold text-22 sm:text-2xl md:3xl lg:text-4xl xl:text-38 sm:mb-8 lg:mb-9 xl:mb-11'>Ro'yhatdan o'tish</h1>
        <form className='border px-5 py-8 rounded-md font-montserrat text-textGrey flex flex-col md:flex-row items-center' action="#">
          <div className='space-y-3 text-sm mr-[10%] w-full'>
            <label className='flex flex-col space-y-2 font-bold'>
              E-mail:
              <input className='border p-2 outline-none rounded-md text-mainBlack font-normal' type="email" placeholder='example@gmail.com' />
            </label>
            <label className='flex flex-col space-y-2 font-bold'>
              Parol:
              <a href="#" className='inline-block text-primaryBlue hover:underline font-normal'>Parollingizni unuttingizmi?</a>
              <input className='border p-2 outline-none rounded-md text-mainBlack font-normal' type="password" placeholder='********' />
            </label>
            <div className='space-x-2 flex items-center'>
              <button className='inline-block py-1 px-5 font-bold text-center text-white bg-gradient-to-br bg-royaleBlue border-btnBlue from-btnBlue rounded-md border hover:border-royaleBlue hover:bg-royaleBlue hover:bg-gradient-to-t hover:from-royaleBlue'>Kirish</button>
              <button className='inline-block py-1 px-5 font-bold text-center border border-royaleBlue text-royaleBlue rounded-md hover:bg-royaleBlue hover:text-white'>Ro'yhatdan o'tish</button>
            </div>
          </div>
          <div className='px-10 mx-2'>
            <h3 className='font-bold mb-1'>Также Вы можете войти через:</h3>
            <div className='mb-3'>
              Yandex
            </div>
            <div className='flex items-center space-x-3 mb-7'>
              <a href="#">
                <img src={vkkontakte} className='rounded-md' width={40} height={20} alt="vkkontakte" />
              </a>
              <a href="#">
                <img src={vkkontakte} className='rounded-md' width={40} height={20} alt="vkkontakte" />
              </a>
              <a href="#">
                <img src={odnoklasniki} className='rounded-md' width={40} height={20} alt="vkkontakte" />
              </a>
            </div>
            <p>При входе и регистрации вы принимаете <a className='text-royaleBlue underline underline-offset-2 hover:no-underline' href="#">пользовательское соглашение</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration