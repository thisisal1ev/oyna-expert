import React from 'react'
import { Link } from 'react-router-dom'

//photo
import profile1 from '../assets/img/profile-1.jpg'
import profile2 from '../assets/img/profile-2.jpg'
import profile3 from '../assets/img/profile-3.jpg'

const Profiles = () => {
  return (
    <div className='py-9'>
      <div className="w-full max-w-base mx-auto px-5">

        <div className='mb-6'>
          <h2 className='text-22 font-extrabold sm:text-26 md:text-3xl mb-3 lg:text-4xl xl:text-44'>Rehau profillaridan birini tanlang</h2>
          <p className='text-sm font-montserrat font-medium text-textGrey sm:text-base'>Dizayn va issiqlik izolyatsiyasi, tejamkor narxda yuqori sifatli derazalar</p>
        </div>

        <div className='grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3'>

          {/* 1 */}
          <div className='p-[30px] my-3 border border-opacity-70 rounded-xl flex flex-col h-auto'>
            <img className='overflow-hidden w-full h-full max-w-36 max-h-44 mb-5' src={profile1} alt="Rehau profili" />
            <Link to='/profillar/Rehau Thermo' className='inline-flex flex-col mb-4 grow h-auto'>
              <span className='inline-block mb-2 font-bold text-[22px] sm:text-[22px] md:text-2xl lg:text-[28px]'>Rehau Thermo</span>
              <span className='inline-block font-medium'>An'anaviy chuqurligi 60 mm bo'lgan derazalar 4 kamerali profil tufayli energiya samaradorligini oshadi.</span>
            </Link>
            <ul className='font-montserrat grow h-auto'>
              <li className='py-2 border-b-2 flex flex-col xl:flex-row xl:items-center xl:justify-between xl:space-x-1'>
                <p className='font-medium text-textGrey mb-2 xl:mb-0'>Profil</p>
                <p className='font-medium text-sm sm:text-base'>REHAU Thermo 60, 4 kamerali</p>
              </li>
              <li className='py-2 border-b-2 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-1'>
                <p className='font-medium text-textGrey mb-2 lg:mb-0'>Ikki oynali oyna</p>
                <p className='font-medium text-sm sm:text-base'>2 kamerali, 32 mm</p>
              </li>
              <li className='py-2 border-b-2 flex flex-col'>
                <p className='font-medium text-textGrey mb-2 xl:mb-0'>Ixchamlovchi</p>
                <p className='font-medium text-sm sm:text-base'>Rehau Raucell: qora, kulrang, oq</p>
              </li>
              <li className='py-2 border-b-2 flex flex-col xl:flex-row xl:items-center xl:justify-between xl:space-x-1'>
                <p className='font-medium text-textGrey mb-2 xl:mb-0'>Aksessuarlar</p>
                <p className='font-medium text-sm sm:text-base'>Roto NT klassi - Premium</p>
              </li>
              <li className='pt-[30px]'>
                <p className='text-lg font-normal space-x-2'><span className='font-semibold text-[25px] sm:text-[26px]'>6 450</span> dan so'm/m<sup>2</sup></p>
                <Link to='/Profillar/Rehau Thermo' className='inline-block pt-6 font-semibold text-base underline underline-offset-8 text-textGrey transition-all duration-300 hover:no-underline hover:text-mainBlack'>profil haqida batafsil</Link>
              </li>
            </ul>
          </div>

          {/* 2 */}
          <div className='p-[30px] my-3 border border-opacity-70 rounded-xl flex flex-col h-auto'>
            <img className='overflow-hidden w-full h-full max-w-36 max-h-44 mb-5' src={profile2} alt="Rehau profili" />
            <Link to='/profillar/Rehau Grazio' className='inline-flex flex-col grow h-auto mb-4'>
              <span className='inline-block mb-2 font-bold text-[22px] sm:text-[22px] md:text-2xl lg:text-[28px]'>Rehau Grazio</span>
              <span className='inline-block font-medium'>Hali ham arzon variant, lekin yuqori issiqlik va ovoz o'tkazmaydigan.</span>
            </Link>
            <ul className='font-montserrat grow h-auto pt-5'>
              <li className='py-2 border-b-2 flex flex-col xl:flex-row xl:items-center xl:justify-between xl:space-x-1'>
                <p className='font-medium text-textGrey mb-2 xl:mb-0'>Profil</p>
                <p className='font-medium text-sm sm:text-base'>REHAU Grazio 70, 5 kamerali</p>
              </li>
              <li className='py-2 border-b-2 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-1'>
                <p className='font-medium text-textGrey mb-2 lg:mb-0'>Ikki oynali oyna</p>
                <p className='font-medium text-sm sm:text-base'>2 kamerali, 32 mm</p>
              </li>
              <li className='py-2 border-b-2 flex flex-col'>
                <p className='font-medium text-textGrey mb-2 xl:mb-0'>Ixchamlovchi</p>
                <p className='font-medium text-sm sm:text-base'>Rehau Raucell: qora, kulrang, oq</p>
              </li>
              <li className='py-2 border-b-2 flex flex-col xl:flex-row xl:items-center xl:justify-between xl:space-x-1'>
                <p className='font-medium text-textGrey mb-2 xl:mb-0'>Aksessuarlar</p>
                <p className='font-medium text-sm sm:text-base'>Roto NT klassi - Premium</p>
              </li>
              <li className='pt-[30px]'>
                <p className='text-lg font-normal space-x-2'><span className='font-semibold text-[25px] sm:text-[26px]'>7 300</span> dan so'm/m<sup>2</sup></p>
                <Link to='/Profillar/Rehau Grazio' className='inline-block pt-6 font-semibold text-base underline underline-offset-8 text-textGrey hover:no-underline transition-all duration-300 hover:text-mainBlack'>profil haqida batafsil</Link>
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div className='p-[30px] my-3 border border-opacity-70 rounded-xl flex flex-col h-auto'>
            <img className='overflow-hidden w-full h-full max-w-36 max-h-44 mb-5' src={profile3} alt="Rehau profili" />
            <Link to='/profillar/Rehau Delight' className='inline-flex flex-col grow h-auto mb-4'>
              <span className='inline-block mb-2 font-bold text-[22px] sm:text-[22px] md:text-2xl lg:text-[28px]'>Rehau Delight</span>
              <span className='inline-block font-medium'>Rehau Delight oynalari bilan xonaga 10% ko&apos;proq yorug&apos;lik kiradi - bu profil balandligining pasayishi tufayli.</span>
            </Link>
            <ul className='font-montserrat grow h-auto'>
              <li className='py-2 border-b-2 flex flex-col xl:flex-row xl:items-center xl:justify-between xl:space-x-1'>
                <p className='font-medium text-textGrey mb-2 xl:mb-0'>Profil</p>
                <p className='font-medium text-sm sm:text-base'>REHAU Delight 60, 5 kamerali</p>
              </li>
              <li className='py-2 border-b-2 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-1'>
                <p className='font-medium text-textGrey mb-2 lg:mb-0'>Ikki oynali oyna</p>
                <p className='font-medium text-sm sm:text-base'>2 kamerali, 32 mm</p>
              </li>
              <li className='py-2 border-b-2 flex flex-col'>
                <p className='font-medium text-textGrey mb-2 xl:mb-0'>Ixchamlovchi</p>
                <p className='font-medium text-sm sm:text-base'>Rehau Raucell: qora, kulrang, oq</p>
              </li>
              <li className='py-2 border-b-2 flex flex-col xl:flex-row xl:items-center xl:justify-between xl:space-x-1'>
                <p className='font-medium text-textGrey mb-2 xl:mb-0'>Aksessuarlar</p>
                <p className='font-medium text-sm sm:text-base'>Roto NT klassi - Premium</p>
              </li>
              <li className='pt-[30px]'>
                <p className='text-lg font-normal space-x-2'><span className='font-semibold text-[25px] sm:text-[26px]'>8 250</span> dan so'm/m<sup>2</sup></p>
                <Link to='/Profillar/Rehau Delight' className='inline-block pt-6 font-semibold text-base underline underline-offset-8 text-textGrey hover:no-underline transition-all duration-300 hover:text-mainBlack'>profil haqida batafsil</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>)
}

export default Profiles