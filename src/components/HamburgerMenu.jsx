import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

//photo
import dropdown2 from '../assets/img/dropdown2.svg'

//data
import { windows, balconies, servicesPage } from '../data'

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>

      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="border-none py-0" onClick={() => handleOpen(1)}>
          <NavLink to='/plastik oynalar' className='font-bold text-base inline-block py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
            Plastik oynalar
          </NavLink>
        </AccordionHeader>
        <AccordionBody className='flex flex-col py-[4.4%] pl-[7%] font-bold font-montserrat text-textGrey'>
          {
            windows.map((window, index) => {
              return (
                <NavLink key={index} to={`/plastik oynalar/${window.title}`} className='inline-block py-1 hover:text-lightGreen transition-all hover:translate-x-3 ease-in-out duration-300'>
                  {window.title}
                </NavLink>
              )
            })
          }
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className="border-none py-0" onClick={() => handleOpen(2)}>
          <NavLink to='/Profillar' className='font-bold text-base inline-block py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
            Profillar
          </NavLink>
        </AccordionHeader>
        <AccordionBody className='flex flex-col py-[4.4%] pl-[7%] font-bold font-montserrat text-textGrey'>
          <NavLink to='/profillar/Rehau Thermo' className='inline-block py-1 hover:text-lightGreen transition-all hover:translate-x-3 ease-in-out duration-300'>
            Rehau Thermo
          </NavLink>
          <NavLink to='/profillar/Rehau Grazio' className='inline-block py-1 hover:text-lightGreen transition-all hover:translate-x-3 ease-in-out duration-300'>
            Rehau Grazio
          </NavLink>
          <NavLink to='/profillar/Rehau Delight' className='inline-block py-1 hover:text-lightGreen transition-all hover:translate-x-3 ease-in-out duration-300'>
            Rehau Delight
          </NavLink>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader className="border-none py-0" onClick={() => handleOpen(3)}>
          <NavLink to='/balkonlar' className='font-bold text-base inline-block py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
            Balkonlar
          </NavLink>
        </AccordionHeader>
        <AccordionBody className='flex flex-col py-[4.4%] pl-[7%] font-bold font-montserrat text-textGrey'>
          {
            balconies.map((balcony, index) => {
              return (
                <NavLink key={index} to={`/balkonlar/${balcony.title}`} className='inline-block py-1 hover:text-lightGreen transition-all hover:translate-x-3 ease-in-out duration-300'>
                  {balcony.title}
                </NavLink>
              )
            })
          }
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader className="border-none py-0" onClick={() => handleOpen(4)}>
          <NavLink to='/plastik oynalar' className='font-bold text-base inline-block py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
            Xizmat ko&apos;rsatish
          </NavLink>
        </AccordionHeader>
        <AccordionBody className='flex flex-col py-[4.4%] pl-[7%] font-bold font-montserrat text-textGrey'>
          {
            servicesPage.map((service, index) => {
              return (
                <NavLink key={index} to={`/xizmat ko'rsatish/${service.title}`} className='inline-block py-1 hover:text-lightGreen transition-all hover:translate-x-3 ease-in-out duration-300'>
                  {service.title}
                </NavLink>
              )
            })
          }
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader className="border-none py-0" onClick={() => handleOpen(5)}>
          <NavLink to='/To&apos;lov' className='font-bold text-base inline-block py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>
            To&apos;lov
          </NavLink>
        </AccordionHeader>
        <AccordionBody className='flex flex-col py-[4.4%] pl-[7%] font-bold font-montserrat text-textGrey'>
          <NavLink to='/To&apos;lov/yetkazib berish' className='inline-block py-1 hover:text-lightGreen transition-all hover:translate-x-3 ease-in-out duration-300'>
            Yetkazib berish
          </NavLink>
          <NavLink to='/To&apos;lov/to&apos;lov usullari' className='inline-block py-1 hover:text-lightGreen transition-all hover:translate-x-3 ease-in-out duration-300'>
            To'lov usullari
          </NavLink>
        </AccordionBody>
      </Accordion>

      <NavLink to='/narxlar' className='font-bold text-base inline-block py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Narxlar</NavLink>

      <NavLink to='/sertifikatlar' className='font-bold text-base inline-block py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Sertifikatlar</NavLink>

      <NavLink to='/registratsiya' className='font-bold text-base inline-block py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Ro'yxatdan o'tish</NavLink>

      <NavLink to='/aksiyalar' className='font-bold text-base inline-block py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Aksiya</NavLink>

      <NavLink to='/about' className='font-bold text-base inline-block py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Kompaniya haqida</NavLink>

      <NavLink to='/news' className='font-bold text-base inline-block py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Yangiliklar</NavLink>

      <NavLink to='/kontaktlar' className='font-bold text-base inline-block py-1 hover:text-lightGreen transition-all ease-in-out duration-500 md:text-lg'>Kontaktlar</NavLink>

    </>
  )
}

export default HamburgerMenu