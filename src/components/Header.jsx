import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

//photo
import location from '../assets/img/location.svg'
import menu from '../assets/img/list-icon.svg'
import dropdown from '../assets/img/dropdown.svg'
import dropdown2 from '../assets/img/dropdown2.svg'
import logo from '../assets/img/logo.svg'
import phone from '../assets/img/phone.svg'
import xmark from '../assets/img/xmark.svg'

//data
import { windows, balconies, servicesPage, profiles } from '../data'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true)
  const [showModal, setShowModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [open, setOpen] = React.useState(0);
  const [openDropMenu, setOpenDropMenu] = React.useState(0);
  const [openDropMenu2, setOpenDropMenu2] = React.useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 185) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const handleLinkClick = () => {
    setOpenMenu(true);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains('overlay')) setShowModal(false), setShowContactModal(false);
    if (e.key === 'Escape') setShowModal(false), setShowContactModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
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

  useEffect(() => {
    if (!openMenu || showModal || showContactModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openMenu, showModal, showContactModal])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#323232"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

  return (
    <header onClick={closeModal} onKeyDown={closeModal}>

      <div className='py-4 border-b-2'>

        <div className="w-full max-w-base mx-auto px-2 flex items-center justify-between">

          <div className='font-medium flex items-center'>

            <img className='hidden lg:block mr-2' src={location} width={24} height={24} alt="location" />
            <p className='font-medium font-montserrat'>Shahar: Andijon</p>

          </div>

          {
            <button onClick={() => setOpenMenu(false)} className={`inline-flex items-center space-x-2 text-white px-5 rounded-es-md h-[56px] bg-lightGreen top-0 right-0 fixed lg:hidden ${showModal || showContactModal ? '-z-0' : 'z-10'}`}>
              <p className='uppercase font-medium'>Menyu</p>
              <img width={28} height={28} src={menu} alt="cross icon" />
            </button>
          }

          {
            !openMenu && <div onClick={() => setOpenMenu(true)} className='fixed top-0 left-0 z-10 w-full h-full opacity-70 bg-black lg:hidden'></div>
          }

          <div className="block fixed top-0 right-0 outline-none w-full h-full z-30 bg-white translate-x-full duration-1000 max-w-none lg:hidden">
            <div className="flex flex-col h-full px-6 py-5 overflow-y-auto">

              <nav className={`absolute top-0 left-0 h-full w-[255px] overflow-y-scroll flex flex-col space-y-3 px-7 pt-14 pb-8 grow bg-white transform ${openMenu ? '-translate-x-0' : `-translate-x-full `} duration-500 sm:w-[325px] sm:px-9 sm:pt-[60px] sm:pb-11 md:w-[360px] md:px-10 md:py-12 lg:hidden`}>
                <button className='absolute top-4 right-2 text-textGrey transition-all duration-500 sm:right-4 md:top-2 md:right-2' onClick={() => setOpenMenu(true)}>
                  <img src={xmark} alt="Exit icon" width={50} height={50} className='w-[30px] h-[35px]' />
                </button>


                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                  <AccordionHeader className="border-none py-0" onClick={() => handleOpen(1)}>
                    <NavLink onClick={handleLinkClick} to='/plastik oynalar' className='font-bold text-base inline-block py-1 active:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
                      Plastik oynalar
                    </NavLink>
                  </AccordionHeader>
                  <AccordionBody onClick={handleLinkClick} className='flex flex-col py-[4.4%] pl-[7%] font-bold font-montserrat text-textGrey'>
                    {
                      windows.map((window, index) => {
                        return (
                          <NavLink key={index} to={`/plastik oynalar/${window.title}`} className='inline-block py-1 active:text-lightGreen transition-all active:translate-x-3 ease-in-out duration-300'>
                            {window.title}
                          </NavLink>
                        )
                      })
                    }
                  </AccordionBody>
                </Accordion>

                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                  <AccordionHeader className="border-none py-0" onClick={() => handleOpen(2)}>
                    <NavLink onClick={handleLinkClick} to='/Profillar' className='font-bold text-base inline-block py-1 active:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
                      Profillar
                    </NavLink>
                  </AccordionHeader>
                  <AccordionBody onClick={handleLinkClick} className='flex flex-col py-[4.4%] pl-[7%] font-bold font-montserrat text-textGrey'>
                    <NavLink to='/profillar/Rehau Thermo' className='inline-block py-1 active:text-lightGreen transition-all active:translate-x-3 ease-in-out duration-300'>
                      Rehau Thermo
                    </NavLink>
                    <NavLink to='/profillar/Rehau Grazio' className='inline-block py-1 active:text-lightGreen transition-all active:translate-x-3 ease-in-out duration-300'>
                      Rehau Grazio
                    </NavLink>
                    <NavLink to='/profillar/Rehau Delight' className='inline-block py-1 active:text-lightGreen transition-all active:translate-x-3 ease-in-out duration-300'>
                      Rehau Delight
                    </NavLink>
                  </AccordionBody>
                </Accordion>

                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                  <AccordionHeader className="border-none py-0" onClick={() => handleOpen(3)}>
                    <NavLink onClick={handleLinkClick} to='/balkonlar' className='font-bold text-base inline-block py-1 active:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
                      Balkonlar
                    </NavLink>
                  </AccordionHeader>
                  <AccordionBody onClick={handleLinkClick} className='flex flex-col py-[4.4%] pl-[7%] font-bold font-montserrat text-textGrey'>
                    {
                      balconies.map((balcony, index) => {
                        return (
                          <NavLink key={index} to={`/balkonlar/${balcony.title}`} className='inline-block py-1 active:text-lightGreen active:translate-x-3 transition-all ease-in-out duration-300'>
                            {balcony.title}
                          </NavLink>
                        )
                      })
                    }
                  </AccordionBody>
                </Accordion>

                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                  <AccordionHeader className="border-none py-0" onClick={() => handleOpen(4)}>
                    <NavLink onClick={handleLinkClick} to='/plastik oynalar' className='font-bold text-base inline-block py-1 active:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
                      Xizmat ko&apos;rsatish
                    </NavLink>
                  </AccordionHeader>
                  <AccordionBody onClick={handleLinkClick} className='flex flex-col py-[4.4%] pl-[7%] font-bold font-montserrat text-textGrey'>
                    {
                      servicesPage.map((service, index) => {
                        return (
                          <NavLink key={index} to={`/xizmat ko'rsatish/${service.title}`} className='inline-block py-1 active:text-lightGreen transition-all active:translate-x-3 ease-in-out duration-300'>
                            {service.title}
                          </NavLink>
                        )
                      })
                    }
                  </AccordionBody>
                </Accordion>

                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                  <AccordionHeader className="border-none py-0" onClick={() => handleOpen(5)}>
                    <NavLink onClick={handleLinkClick} to='/To&apos;lov' className='font-bold text-base inline-block py-1 active:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
                      To&apos;lov
                    </NavLink>
                  </AccordionHeader>
                  <AccordionBody onClick={handleLinkClick} className='flex flex-col py-[4.4%] pl-[7%] font-bold font-montserrat text-textGrey'>
                    <NavLink to='/To&apos;lov/yetkazib berish' className='inline-block py-1 active:text-lightGreen transition-all active:translate-x-3 ease-in-out duration-300'>
                      Yetkazib berish
                    </NavLink>
                    <NavLink to='/To&apos;lov/to&apos;lov usullari' className='inline-block py-1 active:text-lightGreen transition-all active:translate-x-3 ease-in-out duration-300'>
                      To&apos;lov usullari
                    </NavLink>
                  </AccordionBody>
                </Accordion>

                <NavLink onClick={handleLinkClick} to='/narxlar' className='font-bold text-base inline-block py-1 active:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Narxlar</NavLink>

                <NavLink onClick={handleLinkClick} to='/sertifikatlar' className='font-bold text-base inline-block py-1 active:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Sertifikatlar</NavLink>

                <NavLink onClick={handleLinkClick} to='/registratsiya' className='font-bold text-base inline-block py-1 active:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Ro&apos;yxatdan o&apos;tish</NavLink>

                <NavLink onClick={handleLinkClick} to='/aksiyalar' className='font-bold text-base inline-block py-1 active:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Aksiya</NavLink>

                <NavLink onClick={handleLinkClick} to='/kompaniya haqida' className='font-bold text-base inline-block py-1 active:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Kompaniya haqida</NavLink>

                <NavLink onClick={handleLinkClick} to='/yangiliklar' className='font-bold text-base inline-block py-1 active:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Yangiliklar</NavLink>

                <NavLink onClick={handleLinkClick} to='/kontaktlar' className='font-bold text-base inline-block py-1 active:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Kontaktlar</NavLink>
              </nav>

            </div>
          </div>

          <nav className='hidden lg:block space-x-4'>

            <NavLink to='/aksiyalar' className='font-semibold text-sm text-mainBlack hover:text-lightGreen transition-all duration-500'>Aksiyalar</NavLink>
            <NavLink to='/kompaniya haqida' className='font-semibold text-sm text-mainBlack hover:text-lightGreen transition-all duration-500'>Kompaniya haqida</NavLink>
            <NavLink to='/yangiliklar' className='font-semibold text-sm text-mainBlack hover:text-lightGreen transition-all duration-500'>Yangiliklar</NavLink>
            <NavLink to='/kontaktlar' className='font-semibold text-sm text-mainBlack hover:text-lightGreen transition-all duration-500'>Kontaktlar</NavLink>

          </nav>

        </div>

      </div>

      <div className={`max-w-base mx-auto w-full px-5`}>
        <div className='pt-5 pb-2 flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div className='flex items-center flex-col mb-5 md:flex-row md:mb-0'>
            <Link to='/'>
              <img className='mb-2 md:mr-5' width={80} height={80} src={logo} alt="logo" />
            </Link>
            <div>
              <p className='font-bold text-2xl text-center md:text-left'>Kompaniya nomi</p>
              <p className='font-montserrat font-medium text-sm text-textGrey'>Oyna, balkonlarni oynalash, lodjiyalar</p>
            </div>
          </div>
          <div>
            <div className='flex items-center space-y-4 flex-col md:flex-row md:justify-between md:space-x-4'>
              <div className='flex items-center space-x-3 md:space-x-4'>
                <img width={25} height={25} className='hidden md:block' src={phone} alt="phone" />
                <div>
                  <p className='font-medium font-montserrat text-sm text-textGrey text-center md:text-left'>Qong'iroq bepul</p>
                  <a className='text-2xl font-semibold font-montserrat' href="tel:+99890000000">{'+998 (90) 000 00 00'}</a>
                </div>
                <button onClick={() => setShowModal(true)}>
                  <img width={25} height={25} src={dropdown} alt="dropdown" />
                </button>
              </div>
              <div className='mx-auto'>
                <button onClick={() => setShowContactModal(true)} className='inline-block mb-5 text-white font-semibold bg-lightGreen px-[30px] py-5 rounded-md border-lightGreen border-2 transition-all duration-500 active:bg-white active:border-lightGreen active:text-mainBlack lg:hover:bg-white lg:hover:border-lightGreen lg:hover:text-mainBlack'>Qong'iroqa kutish</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`hidden lg:block bg-grey ${isSticky ? 'fixed w-full z-50 top-0 left-0' : ''}`}>

        <div className="w-full max-w-base mx-auto px-5 flex items-center justify-between">


          <div className='dropdown'>

            <Link to='/plastik oynalar' className='dropdown flex pt-5 pb-6 space-x-2 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen'>
              <span>Plastik oynalar</span>
              <img className='dropdown-icon transition-all duration-300' width={25} height={25} src={dropdown2} alt="dropdown" />
            </Link>

            <div className={`dropdown_menu absolute max-w-72 z-10 border bg-white font-medium focus:outline-none ${openDropMenu ? 'block' : 'hidden'}`}>
              {
                windows.map((window, index) => {
                  return (
                    <Link to={`/plastik oynalar/${window.title}`} className='inline-flex px-7 py-4 ease-in border-b w-full transition-all duration-300 hover:text-lightGreen last:border-none' key={index}>
                      {window.title}
                    </Link>
                  )
                })
              }
            </div>

          </div>

          <div className="dropdown">

            <Link to='/profillar' className='dropdown flex pt-5 pb-6 space-x-2 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen'>
              <span>Profillar</span>
              <img className='dropdown-icon transition-all duration-300' width={25} height={25} src={dropdown2} alt="dropdown" />
            </Link>

            <div className={`dropdown_menu absolute max-w-72 z-10 border bg-white font-medium focus:outline-none ${openDropMenu ? 'block' : 'hidden'}`}>
              {
                profiles.map((profile, index) => {
                  return (
                    <Link to={`/profillar/${profile.title}`} className='inline-flex px-7 py-4 ease-in border-b w-full transition-all duration-300 hover:text-lightGreen last:border-none' key={index}>
                      {profile.title}
                    </Link>
                  )
                })
              }
            </div>

          </div>


          <div className="dropdown">

            <Link to='/balkonlar' className='dropdown flex pt-5 pb-6 space-x-2 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen'>
              <span>Balkonlar</span>
              <img className='dropdown-icon transition-all duration-300' width={25} height={25} src={dropdown2} alt="dropdown" />
            </Link>

            <div className={`dropdown_menu absolute max-w-72 z-10 border bg-white font-medium focus:outline-none ${openDropMenu ? 'block' : 'hidden'}`}>
              {
                balconies.map((balcony, index) => {
                  return (
                    <Link to={`/balkonlar/${balcony.title}`} className='inline-flex px-7 py-4 ease-in border-b w-full transition-all duration-300 hover:text-lightGreen last:border-none' key={index}>
                      {balcony.title}
                    </Link>
                  )
                })
              }
            </div>

          </div>


          <div className="dropdown">

            <Link to="/xizmat ko'rsatish" className='flex pt-5 pb-6 space-x-2 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen'>
              <span>Xizmat ko&apos;rsatish</span>
              <img className='dropdown-icon transition-all duration-300' width={25} height={25} src={dropdown2} alt="dropdown" />
            </Link>

            <div className={`dropdown_menu absolute max-w-72 z-10 border bg-white font-medium focus:outline-none ${openDropMenu ? 'block' : 'hidden'}`}>
              {
                servicesPage.map((service, index) => {
                  return (
                    <Link to={`/xizmat ko'rsatish/${service.title}`} className='inline-flex px-7 py-4 ease-in border-b w-full transition-all duration-300 hover:text-lightGreen last:border-none' key={index}>
                      {service.title}
                    </Link>
                  )
                })
              }
            </div>

          </div>


          <div className="dropdown">

            <Link to='/to&apos;lov' className='flex pt-5 pb-6 space-x-2 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen lg:hidden xl:flex'>
              <span>To&apos;lov</span>
              <img className='dropdown-icon transition-all duration-300' width={25} height={25} src={dropdown2} alt="dropdown" />
            </Link>

            <div className={`dropdown_menu absolute max-w-72 z-10 border bg-white font-medium focus:outline-none ${openDropMenu ? 'block' : 'hidden'}`}>

              <Link to='/to&apos;lov/yetkazib berish' className='inline-flex px-7 py-4 ease-in border-b w-full transition-all duration-300 hover:text-lightGreen'>Yetkazib berish</Link>

              <Link to='/to&apos;lov/to&apos;lov usullari' className='inline-flex px-7 py-4 ease-in border-b w-full transition-all duration-300 hover:text-lightGreen'>To&apos;lov usullari</Link>

            </div>

          </div>

          <Link to='/narxlar' className='pt-5 pb-6 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen lg:hidden xl:block'>Narxlar</Link>

          <Link to='/sertifikatlar' className='pt-5 pb-6 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen lg:hidden xl:block'>Sertifikatlar</Link>

          <Link to='/registratsiya' className='pt-5 pb-6 font-bold transition-all duration-500 text-textGrey hover:text-lightGreen lg:hidden xl:block'>Ro&apos;yxatdan o&apos;tish</Link>




          <div className='dropdown pl-5 p-1 lg:block xl:hidden'>

            <button className='hamburger-btn transition-all duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256">
                <path fill="#7f7f7f" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16Zm176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Z" />
              </svg>
            </button>

            <div className={`dropdown_menu absolute right-5 max-w-60 z-10 border bg-white font-medium focus:outline-none ${openDropMenu ? 'block' : 'hidden'}`}>


              <Link onMouseEnter={() => setOpenDropMenu2(1)} onMouseLeave={() => setOpenDropMenu2(0)} to='/to&apos;lov' className='nested inline-flex items-center justify-between px-7 py-4 ease-in border-b w-full transition-all duration-300 hover:text-lightGreen'>
                <img className='rotate-90' src={dropdown2} alt="arrow-icon" />
                <span className='inline-block'>To&apos;lov shartlari</span>
              </Link>

              <div onMouseEnter={() => setOpenDropMenu2(1)} onMouseLeave={() => setOpenDropMenu2(0)} className={`dropdown_menu_item absolute top-0 right-[239px] max-w- z-10 border bg-white font-medium focus:outline-none ${openDropMenu2 ? 'block' : 'hidden'}`}>

                <Link to='/to&apos;lov/Yetkazib berish' className='inline-block text-end px-7 py-4 ease-in border-b w-full transition-all duration-300 hover:text-lightGreen whitespace-nowrap'>Yetkazib berish</Link>

                <Link to='/to&apos;lov/to&apos;lov usullari' className='inline-block text-end px-7 py-4 ease-in border-b w-full transition-all duration-300 hover:text-lightGreen whitespace-nowrap'>To&apos;lov usullari</Link>

              </div>

              <Link to='/narxlar' className='inline-block text-end px-7 py-4 ease-in border-b w-full transition-all duration-300 hover:text-lightGreen'>Narxlar</Link>

              <Link to='/sertifikatlar' className='inline-block text-end px-7 py-4 ease-in border-b w-full transition-all duration-300 hover:text-lightGreen'>Sertifikatlar</Link>

              <Link to='/Registratsiya' className='inline-block text-end px-7 py-4 ease-in border-b w-full transition-all duration-300 hover:text-lightGreen'>Ro&apos;yxatdan o&apos;tish</Link>

            </div>

          </div>

        </div>

      </div>

      {
        showModal && <div className='relative max-w-base mx-auto px-5 w-full'>
          <div className="overlay"></div>
          <div className='flex flex-col items-center justify-center'>
            <div className="fixed top-20 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] p-4 md:p-6 md:pt-10 xl:p-10 rounded-xl h-auto bg-white z-50 mx-5 xl:top-10">
              <div className="py-1 md:py-2 text-mainBlack mb-1 md:mb-5 mt-5 flex items-center justify-between">
                <h3 className='font-semibold font-montserrat text-lg md:text-xl xl:text-2xl'>Bog&apos;lanish uchun ma&apos;lumot</h3>
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
                  <h4 className='font-medium font-montserrat text-textGrey text-sm md:text-base'>Raqamga qo&apos;ng&apos;iroq qiling:</h4>
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
                <h4 className='font-extrabold text-lg md:text-xl lg:text-2xl font-raleway text-center'>So&apos;rov qoldiring</h4>
                <p className='text-sm text-textGrey mt-2 font-medium text-center'>va bizning mutaxassislarimiz imkon qadar tezroq siz bilan bog&apos;lanadi</p>
                <button onClick={() => setShowContactModal(false)} className="absolute top-5 right-4 opacity-30 transition-all duration-500 hover:opacity-100">
                  <img src={xmark} alt="Exit icon" width={40} className='w-6 md:w-10' />
                </button>
              </div>
              <div className="py-1 md:py-3 lg:py-5 text-mainBlack">
                <form name='modal-question' onSubmit={(e) => { e.preventDefault(), setChecked(false), checked && alert('Xat ketti'), checked && setShowContactModal(false), !checked && alert('Iltimos bizning siyosatimiz qabul qiling!') }} className='w-full flex flex-col'>
                  <input className='bg-transparent py-2 md:py-4 text-sm md:text-base font-montserrat outline-none border-b-2 my-2 hover:placeholder:text-lightGreen placeholder:text-mainBlack focus:border-mainBlack' placeholder='Ismingiz' type="text" required />
                  <input id='changeContent' className='bg-transparent py-2 md:py-4 text-sm md:text-base font-montserrat outline-none border-b-2 my-2 placeholder:text-mainBlack focus:border-mainBlack' placeholder='Telefon raqamingiz' pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}" type="tel" required />
                  <div className='my-1 sm:my-2 flex items-center justify-between pb-4'>
                    <div className="inline-flex items-center">
                      <div className="relative flex items-center p-3 rounded-full cursor-pointer mr-2 lg:mr-5">
                        <input onChange={() => setChecked(true)} id="ripple-on" type="checkbox"
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-textGrey before:opacity-0 before:transition-opacity checked:border-lightGreen checked:bg-lightGreen checked:before:bg-lightGreen hover:before:opacity-10" />
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
                    <label className='font-medium text-textGrey text-sm md:text-base' htmlFor='ripple-on'>Men shaxsiy ma&apos;lumotlarni qayta ishlash va <a className='underline' target='_blank' href="#">maxfiylik siyosatiga roziman.</a></label>
                  </div>
                  <button type='submit' onSubmit={() => alert('Xat ketti')} className='py-2 px-5 md:py-4 md:px-7 lg:py-7 lg:px-9 text-sm md:text-base bg-lightGreen border-2 border-lightGreen w-full font-bold font-raleway overflow-hidden rounded-md text-white active:hover:bg-white active:text-mainBlack lg:hover:bg-white lg:hover:text-mainBlack transition-all duration-500'>So&apos;rov qoldirish</button>
                </form>
              </div>
            </div>
          </div>
        </>
      }

      {
        !showModal && !showContactModal && openMenu && showButton && <>
          <button onClick={scrollToTop} className={`top fixed bottom-10 right-10 z-10 px-5 py-5 outline-none border-2 rounded-full bg-white  transition-all duration-500 hover:bg-lightGreen hover:border-lightGreen`}>
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