import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

//photo
import location from '../assets/img/location.svg'
import menu from '../assets/img/list-icon.svg'
import dropdown from '../assets/img/dropdown.svg'
import dropdown2 from '../assets/img/dropdown2.svg'
import logo from '../assets/img/logo.svg'
import phone from '../assets/img/phone.svg'
import xmark from '../assets/img/xmark.svg'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true)
  const [showModal, setShowModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [navAccardion, setNavAccardion] = useState(false);

  const closeModal = (e) => {
    if (e.target.classList.contains('overlay')) setShowModal(false), setShowContactModal(false);
    if (e.key === 'Escape') setShowModal(false), setShowContactModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <header onClick={closeModal} onKeyDown={closeModal}>

      <div className='py-4 border-b-2'>
        <div className="w-full max-w-base mx-auto px-2 flex items-center justify-between">
          <div className='font-medium flex items-center'>
            <img className='hidden lg:block mr-2' src={location} alt="location" />
            <p className='font-medium font-montserrat'>Shahar: Andijon</p>

          </div>
          {
            <button onClick={() => setOpenMenu(false)} className={`inline-flex items-center space-x-2 text-white px-5 rounded-es-md h-[56px] bg-lightGreen top-0 right-0 fixed lg:hidden ${showModal || showContactModal ? '-z-0' : 'z-10'}`}>
              <p className='uppercase font-medium'>Menyu</p>
              <img width={28} height={28} src={menu} alt="cross icon" />
            </button>
          }

          {!openMenu && <div onClick={() => setOpenMenu(true)} className='fixed top-0 left-0 z-10 w-full h-full opacity-70 bg-black lg:hidden'></div>}
          <div className="block fixed top-0 right-0 w-full h-full z-30 bg-white translate-x-full duration-300 max-w-none lg:hidden">
            <div className="flex flex-col h-full px-6 py-5 overflow-y-auto">
              <nav className={`absolute top-0 left-0 h-full w-[255px] flex flex-col space-y-3 px-7 pt-14 pb-8 grow bg-white transform ${openMenu ? '-translate-x-0' : `-translate-x-full `} duration-500 sm:w-[325px] sm:px-9 sm:pt-[60px] sm:pb-11 md:w-[360px] md:px-10 md:py-12 lg:hidden`}>
                <button className='absolute top-4 right-3 text-textGrey transition-all duration-500 sm:right-4 md:top-2 md:right-10' onClick={() => setOpenMenu(true)}>
                  <img src={xmark} alt="Exit icon" width={50} height={50} className='w-[30px] h-[35px]' />
                </button>
                <div className='flex items-center justify-between'>
                  <NavLink to='/plastik oynalar' className='font-bold py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
                    <span className='mr-5'>Plastik oynalar</span>
                  </NavLink>
                  <button onClick={() => setNavAccardion(prev => !prev)}>
                    <img src={dropdown2} alt="dropdown" className={`${navAccardion ? '-rotate-180' : ''} transition-all duration-500`} />
                  </button>
                </div>
                <div onClick={() => setNavAccardion(true)} className={navAccardion ? 'flex flex-col transition-all duration-500 px-2 py-3 text-sm text-gray-500 space-y-3 rounded-lg' : 'hidden'}>
                  <Link to='/sertifikatlar' className='hover:text-lightGreen transition-colors ease-in-out duration-500'>
                    Sertifikatlar
                  </Link>
                  <Link className='hover:text-lightGreen transition-colors ease-in-out duration-500'>
                    Foydali maqolalar
                  </Link>
                  <Link className='hover:text-lightGreen transition-colors ease-in-out duration-500'>
                    Savol-javob
                  </Link>
                </div>
                <NavLink to='/Profillar' className='font-bold flex items-center justify-between py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
                  <span className='mr-5'>Profillar</span>
                  <img src={dropdown2} alt="drop icon" />
                </NavLink>
                <NavLink to='/balkonlar' className='font-bold flex items-center justify-between py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
                  <span className='mr-5'>Balkonlar</span>
                  <img src={dropdown2} alt="drop icon" />
                </NavLink>
                <NavLink to="/xizmat ko'rsatish" className='font-bold flex items-center justify-between py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
                  <span className='mr-5'>Xizmat ko'rsatish</span>
                  <img src={dropdown2} alt="drop icon" />
                </NavLink>
                <NavLink to='/payment' className='font-bold flex items-center justify-between py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
                  <span className='mr-5'>To'lov</span>
                  <img src={dropdown2} alt="drop icon" />
                </NavLink>
                <NavLink to='/narxlar' className='font-bold py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Narxlar</NavLink>
                <NavLink to='/sertific' className='font-bold py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Sertifikatlar</NavLink>
                <NavLink to='/registratsiya' className='font-bold py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Ro'yxatdan o'tish</NavLink>
                <NavLink to='/aksiyalar' className='font-bold py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Aksiya</NavLink>
                <NavLink to='/about' className='font-bold py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Kompaniya haqida</NavLink>
                <NavLink to='/news' className='font-bold py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Yangiliklar</NavLink>
                <NavLink to='/kontaktlar' className='font-bold py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Kontaktlar</NavLink>
              </nav>
            </div>
          </div>

          <nav className='hidden lg:block space-x-4'>
            <NavLink to='/aksiyalar' className='font-semibold text-sm text-mainBlack hover:text-lightGreen transition-all duration-500'>Aksiyalar</NavLink>
            <NavLink to='/about' className='font-semibold text-sm text-mainBlack hover:text-lightGreen transition-all duration-500'>Kompaniya haqida</NavLink>
            <NavLink to='/news' className='font-semibold text-sm text-mainBlack hover:text-lightGreen transition-all duration-500'>Yangiliklar</NavLink>
            <NavLink to='/kontaktlar' className='font-semibold text-sm text-mainBlack hover:text-lightGreen transition-all duration-500'>Kontaktlar</NavLink>
          </nav>

        </div>

      </div>

      <div className='max-w-base mx-auto w-full px-5'>
        <div className='pt-5 pb-2 flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex items-center flex-col mb-5 md:flex-row md:mb-0'>
            <Link to='/'>
              <img className='mb-2 md:mr-5' src={logo} alt="logo" />
            </Link>
            <div>
              <p className='font-bold text-2xl text-center md:text-left'>Kompaniya nomi</p>
              <p className='font-montserrat font-medium text-sm text-textGrey'>Oyna, balkonlarni oynalash, lodjiyalar</p>
            </div>
          </div>
          <div>
            <div className='flex items-center space-y-4 flex-col md:flex-row md:justify-between md:space-x-4'>
              <div className='flex items-center space-x-3 md:space-x-4'>
                <img className='hidden md:block' src={phone} alt="phone" />
                <div>
                  <p className='font-medium font-montserrat text-sm text-textGrey text-center md:text-left'>Qong'iroq bepul</p>
                  <a className='text-2xl font-semibold font-montserrat' href="tel:+99890000000">{'+998 (90) 000 00 00'}</a>
                </div>
                <button onClick={() => setShowModal(true)}>
                  <img src={dropdown} alt="dropdown" />
                </button>
              </div>
              <div className='mx-auto'>
                <button onClick={() => setShowContactModal(true)} className='inline-block mb-5 text-white font-semibold bg-lightGreen px-[30px] py-5 rounded-md border-lightGreen border-2 transition-all duration-500 active:bg-white active:border-lightGreen active:text-mainBlack lg:hover:bg-white lg:hover:border-lightGreen lg:hover:text-mainBlack'>Qong'iroqa kutish</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`hidden lg:block bg-grey`}>
        <div className="w-full max-w-base mx-auto px-5 flex items-center justify-between">
          <div className='flex items-center justify-between lg:space-x-12 xl:space-x-2 xl:w-full'>
            <Link to='/plastik oynalar' className='flex pt-5 pb-6 space-x-2 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen'>
              <span>Plastik oynalar</span>
              <img src={dropdown2} alt="dropdown" />
            </Link>
            <Link to='/profillar' className='flex pt-5 pb-6 space-x-2 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen'>
              <span>Profillar</span>
              <img src={dropdown2} alt="dropdown" />
            </Link>
            <Link to='/balkonlar' className='flex pt-5 pb-6 space-x-2 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen'>
              <span>Balkonlar</span>
              <img src={dropdown2} alt="dropdown" />
            </Link>
            <Link to="/xizmat ko'rsatish" className='flex pt-5 pb-6 space-x-2 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen'>
              <span>Xizmat ko'rsatish</span>
              <img src={dropdown2} alt="dropdown" />
            </Link>
            <Link to='/payment' className='flex pt-5 pb-6 space-x-2 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen lg:hidden xl:flex'>
              <span>To'lov</span>
              <img src={dropdown2} alt="dropdown" />
            </Link>
            <Link to='/narxlar' className='pt-5 pb-6 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen lg:hidden xl:block'>Narxlar</Link>
            <Link to='/sertifikatlar' className='pt-5 pb-6 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen lg:hidden xl:block'>Sertifikatlar</Link>
            <Link to='/registratsiya' className='pt-5 pb-6 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen lg:hidden xl:block'>Ro'yxatdan o'tish</Link>

          </div>

          <div className='p-1 lg:block xl:hidden'>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256">
                <path fill="#7f7f7f" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16Zm176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {
        showModal && <div className='relative max-w-base mx-auto px-5 w-full'>
          <div className="overlay"></div>
          <div className='flex flex-col items-center justify-center'>
            <div className="fixed top-20 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] p-4 md:p-6 md:pt-10 xl:p-10 rounded-xl h-auto bg-white z-50 mx-5 xl:top-10">
              <div className="py-1 md:py-2 text-mainBlack mb-1 md:mb-5 mt-5 flex items-center justify-between">
                <h3 className='font-semibold font-montserrat text-lg md:text-xl xl:text-2xl'>Bog'lanish uchun ma'lumot</h3>
                <button onClick={() => setShowModal(false)} className="absolute top-5 right-4 opacity-30 transition-all duration-500 hover:opacity-100">
                  <img src={xmark} alt="Exit icon" width={40} className='w-6 lg:w-10' />
                </button>
              </div>
              <div className="py-1 md:py-3 lg:py-5 text-mainBlack">
                <div className='space-y-1 mb-2 md:mb-5'>
                  <h4 className='font-medium font-montserrat text-textGrey text-sm md:text-base'>Ish tartibi:</h4>
                  <p className='text-sm md:text-base'>Dushanba-Yakshanba: <strong>Kechayu-kunduz</strong></p>
                </div>
                <div className='space-y-1 mb-2 md:mb-5'>
                  <h4 className='font-medium font-montserrat text-textGrey text-sm md:text-base'>Raqamga qo'ng'iroq qiling:</h4>
                  <a className='font-semibold text-lg md:text-xl font-montserrat' href="tel:+998999999999">+998 (99) 999 99 99</a>
                  <div className='flex items-center space-x-1 md:space-x-2'>
                    <Link to='/' className='font-semibold underline text-sm md:text-base text-mainGrey hover:text-mainBlack transition-all duration-500'>WhatsApp</Link>
                    <Link to='https://t.me/thisisal1ev' className='font-semibold underline text-sm md:text-base text-mainGrey hover:text-mainBlack transition-all duration-500'>Telegram</Link>
                  </div>
                </div>
                <div className="space-y-1 mb-5">
                  <h4 className='font-medium font-montserrat text-textGrey text-sm md:text-base'>Xatlar va takliflar uchun:</h4>
                  <Link to='https://aaalievvv1@gmail.com' className='font-semibold text-base md:text-lg text-lightGreen underline underline-offset-1 hover:no-underline'>aaalievvv1@gmail.com
                  </Link>
                </div>
                <div className="space-y-1">
                  <h4 className='font-medium font-montserrat text-mainGrey text-sm md:text-base'>Biz quyidagi manzilda joylashganmiz:</h4>
                  <address className='font-medium font-montserrat not-italic text-sm md:text-base'>Andijon viloyati, Baliqchi tumani, Chinobod shaharchasi </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {
        showContactModal && <>
          <div className="overlay"></div>
          <div className='flex flex-col items-center justify-center'>
            <div className="fixed top-14 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] p-4 md:p-6 md:pt-10 xl:p-10 rounded-xl h-auto bg-white z-50 xl:top-10">
              <div className="py-2 text-mainBlack mb-2 md:mb-5 mt-5 md:mt-10 flex flex-col">
                <h3 className='font-extrabold text-lg md:text-xl lg:text-2xl font-raleway text-center'>Savollaringiz qoldimi?</h3>
                <h4 className='font-extrabold text-lg md:text-xl lg:text-2xl font-raleway text-center'>So'rov qoldiring</h4>
                <p className='text-sm text-textGrey mt-2 font-medium text-center'>va bizning mutaxassislarimiz imkon qadar tezroq siz bilan bog'lanadi</p>
                <button onClick={() => setShowContactModal(false)} className="absolute top-5 right-4 opacity-30 transition-all duration-500 hover:opacity-100">
                  <img src={xmark} alt="Exit icon" width={40} className='w-6 md:w-10' />
                </button>
              </div>
              <div className="py-1 md:py-3 lg:py-5 text-mainBlack">
                <form name='modal-question' onSubmit={(e) => { e.preventDefault(), setChecked(false), checked && alert('Xat ketti'), checked && setShowContactModal(false), !checked && alert('Iltimos bizning siyosatimiz qabul qiling!') }} className='w-full flex flex-col'>
                  <input className='bg-transparent py-2 md:py-4 text-sm md:text-base font-montserrat outline-none border-b-2 my-2 hover:placeholder:text-lightGreen placeholder:text-mainBlack focus:border-mainBlack' placeholder='Ismingiz' type="text" required />
                  <input id='changeContent' className='bg-transparent py-2 md:py-4 text-sm md:text-base font-montserrat outline-none border-b-2 my-2 placeholder:text-mainBlack focus:border-mainBlack' placeholder='Telefon raqamingiz' pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}" type="tel" required />
                  <div className='my-1 sm:my-2 flex items-center justify-between pb-4'>
                    <input onChange={() => setChecked(true)} width={20} height={20} className='w-6 md:w-10 h-5 mr-4 cursor-pointer outline-none focus:outline-none checked:bg-lightGreen ' id='check' type="checkbox" />
                    <label className='font-medium text-textGrey text-sm md:text-base' htmlFor='check'>Men shaxsiy ma'lumotlarni qayta ishlash va <a className='underline' target='_blank' href="#">maxfiylik siyosatiga roziman.</a></label>
                  </div>
                  <button type='submit' onSubmit={() => alert('Xat ketti')} className='py-2 px-5 md:py-4 md:px-7 lg:py-7 lg:px-9 text-sm md:text-base bg-lightGreen border-2 border-lightGreen w-full font-bold font-raleway overflow-hidden rounded-md text-white active:hover:bg-white active:text-mainBlack lg:hover:bg-white lg:hover:text-mainBlack transition-all duration-500'>So'rov qoldirish</button>
                </form>
              </div>
            </div>
          </div>
        </>
      }

      {
        !showModal && !showContactModal && openMenu && showButton && <>
          <button onClick={scrollToTop} className={`fixed bottom-10 right-10 z-10 px-5 py-5 outline-none border-2 rounded-full bg-white  transition-all duration-500 hover:bg-lightGreen hover:border-lightGreen`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 26 32.969" data-prefix="i9ikc8dfi">
              <path d="M12.565.069a1.2 1.2 0 0 1 .865 0 213.326 213.326 0 0 0 .291.151l11.775 9.7a1.264 1.264 0 0 1 .272 1.746 1.216 1.216 0 0 1-1.719.276l-9.821-8.254v28.028a1.231 1.231 0 1 1-2.462 0V3.688l-9.821 8.254a1.216 1.216 0 0 1-1.719-.276A1.264 1.264 0 0 1 .498 9.92L12.273.22a1.194 1.194 0 0 1 .156-.081 1.16 1.16 0 0 1 .136-.07z" fill='currentColor' fillRule="evenodd" className="path-i3cr1n271">
              </path>
            </svg>
          </button>
        </>
      }

    </header >
  )
}

export default Header