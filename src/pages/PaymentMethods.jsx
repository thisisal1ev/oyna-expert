import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg className={`${id === open ? "rotate-45" : ""} h-5 w-5 transition-transform`} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
      <path fill="currentColor" fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .75.75v4.75h4.75a.75.75 0 0 1 0 1.5H8.75v4.75a.75.75 0 0 1-1.5 0V8.75H2.5a.75.75 0 0 1 0-1.5h4.75V2.5A.75.75 0 0 1 8 1.75" clipRule="evenodd"></path>
    </svg>

  );
}

const PaymentMethods = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='py-3%'>

      <div className="content-container">

        <h1 className='mb-3% font-extrabold text-22 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>To&apos;lov usullari</h1>

        <div className='font-montserrat text-textGrey py-6 lg:py-8'>

          <Accordion className="border-y-2 border-textGrey" open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader className="border-none outline-none font-bold text-xl py-4 text-left sm:text-22 lg:text-26 sm:py-5 md:py-6" onClick={() => handleOpen(1)}>Tog&apos;lar so&apos;zidan uzoqroqda</AccordionHeader>
            <AccordionBody className='md:text-lg xl:text-xl mb-5 lg:mb-6'>
              Hammadan ajralib, ular katta til okeani bo&apos;lgan Semantika qirg&apos;og&apos;idagi tom ma&apos;nodagi uylarda yashaydilar. Kichik Dal daryosi butun mamlakat bo&apos;ylab oqadi va uni barcha kerakli qoidalar bilan ta&apos;minlaydi.
            </AccordionBody>
          </Accordion>
          
          <Accordion className="border-b-2 border-textGrey" open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader className="border-none outline-none font-bold text-xl py-4 text-left sm:text-22 lg:text-26 sm:py-5 md:py-6" onClick={() => handleOpen(2)}>
              Ajoyib Oksmoks
            </AccordionHeader>
            <AccordionBody className='md:text-lg xl:text-xl mb-5 lg:mb-6'>
              Men uni yomon vergullar, yovvoyi savol belgilari va yolg&apos;on Semikoli haqida ogohlantirdim, lekin matn uning joyidan siljishiga imkon bermadi. U yettita bosh harfini yig‘ib, bosh harfini belbog‘iga qo‘yib, yo‘lda o‘zini tutdi.
            </AccordionBody>
          </Accordion>

        </div>

      </div>

    </div>
  )
}

export default PaymentMethods