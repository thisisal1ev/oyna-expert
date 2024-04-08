//photo
import whatsapp from '../assets/img/whatsapp-contact-img.svg'
import telegram from '../assets/img/telegram-contact-img.svg'
import vkkontakte from '../assets/img/vkkontakte.svg'
import odnoklasniki from '../assets/img/odnoklasniki.svg'
import rutube from '../assets/img/rutube.svg'

const Contacts = () => {
  return (
    <div className='py-9'>
      <div className="w-full max-w-base mx-auto px-5">
        <h1 className='mb-6 font-extrabold text-22 sm:text-2xl md:3xl lg:text-4xl xl:text-38 sm:mb-8 lg:mb-9 xl:mb-11'>Kontaktlar</h1>
        <ul className='space-y-3 font-montserrat xl:space-y-5'>
          <li className='flex flex-col mb-2 md:flex-row md:items-center'>
            <a href="tel:+998900000000" className='font-bold text-xl mr-4 text-textGrey mb-2'>+998 (90) 000 00 00</a>
            <div className='flex items-center space-x-1'>
              <a href="#">
                <img src={whatsapp} width={40} height={20} alt="whatsapp" />
              </a>
              <a href="https://t.me/thisisal1ev" target='_blank'>
                <img src={telegram} width={40} height={20} alt="telegram" />
              </a>
            </div>
          </li>
          <li className='text-textGrey text-lg'>Dushanba-Juma: 11:00 dan 21:00 gacha</li>
          <li className='text-textGrey text-lg'>Shanba-Yakshanba: Dam olish kunlari</li>
          <li className='text-textGrey text-lg'>Andijon viloyati, Baliqchi tumani, Chinobod shaharchasi</li>
          <li className='text-primaryBlue text-lg'>
            <a href="#">mail@company.uz</a>
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
    </div>
  )
}

export default Contacts