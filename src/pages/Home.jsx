import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tab from '../components/Tab'

//photos
import profile1 from '../assets/img/profile-1.jpg'
import profile2 from '../assets/img/profile-2.jpg'
import profile3 from '../assets/img/profile-3.jpg'
import serviceIMG from '../assets/img/devushka-sidit-pered-oknom.webp'

//data
import { service, stagesOfWork } from '../data'

const Home = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>

      <div className='py-9'>
        <div className="w-full max-w-base mx-auto px-5">
        </div>
      </div>

      <div className='py-9'>
        <div className="w-full max-w-base mx-auto px-5">

          <div className='mb-6' data-aos="fade-up" data-aos-anchor-placement="center" data-aos-easing="ease-in" data-aos-duration="1000">
            <h2 className='text-[22px] font-bold sm:text-[25px] md:text-[30px] mb-2 lg:text-4xl'>Rehau profillaridan birini tanlang</h2>
            <p className='text-sm font-medium opacity-70 sm:text-base'>Dizayn va issiqlik izolyatsiyasi, tejamkor narxda yuqori sifatli derazalar</p>
          </div>

          <div className='grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3'>

            {/* 1 */}
            <div className='p-[30px] my-3 border border-opacity-70 rounded-xl'>
              <img className='overflow-hidden w-full h-full max-w-36 max-h-44 mb-5' src={profile1} alt="Rehau profili" />
              <Link to='/rehau-thermo' className='inline-block mb-4'>
                <span className='inline-block mb-2 font-bold text-[22px] sm:text-[22px] md:text-2xl lg:text-[28px]'>Rehau Thermo</span>
                <span className='inline-block font-medium'>An'anaviy chuqurligi 60 mm bo'lgan derazalar 4 kamerali profil tufayli energiya samaradorligini oshadi.</span>
              </Link>
              <ul className='font-montserrat'>
                <li className='py-2 border-b-2 flex flex-col xl:flex-row xl:items-center xl:justify-between xl:space-x-1'>
                  <p className='font-medium opacity-70 mb-2 xl:mb-0'>Profil</p>
                  <p className='font-medium text-sm sm:text-base'>REHAU Thermo 60, 4 kamerali</p>
                </li>
                <li className='py-2 border-b-2 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-1'>
                  <p className='font-medium opacity-70 mb-2 lg:mb-0'>Ikki oynali oyna</p>
                  <p className='font-medium text-sm sm:text-base'>2 kamerali, 32 mm</p>
                </li>
                <li className='py-2 border-b-2 flex flex-col'>
                  <p className='font-medium opacity-70 mb-2 xl:mb-0'>Ixchamlovchi</p>
                  <p className='font-medium text-sm sm:text-base'>Rehau Raucell: qora, kulrang, oq</p>
                </li>
                <li className='py-2 border-b-2 flex flex-col xl:flex-row xl:items-center xl:justify-between xl:space-x-1'>
                  <p className='font-medium opacity-70 mb-2 xl:mb-0'>Aksessuarlar</p>
                  <p className='font-medium text-sm sm:text-base'>Roto NT klassi - Premium</p>
                </li>
                <li className='pt-[30px]'>
                  <p className='text-lg font-normal space-x-2'><span className='font-semibold text-[25px] sm:text-[26px]'>6 450</span> dan so'm/m<sup>2</sup></p>
                  <Link to='/rehau-thermo' className='inline-block pt-6 font-semibold text-base underline underline-offset-8 opacity-70 hover:no-underline'>profil haqida batafsil</Link>
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div className='p-[30px] my-3 border border-opacity-70 rounded-xl'>
              <img className='overflow-hidden w-full h-full max-w-36 max-h-44 mb-5' src={profile2} alt="Rehau profili" />
              <Link to='/rehau-grazio' className='inline-block mb-4'>
                <span className='inline-block mb-2 font-bold text-[22px] sm:text-[22px] md:text-2xl lg:text-[28px]'>Rehau Grazio</span>
                <span className='inline-block font-medium'>Hali ham arzon variant, lekin yuqori issiqlik va ovoz o'tkazmaydigan.</span>
              </Link>
              <ul className='font-montserrat pt-5'>
                <li className='py-2 border-b-2 flex flex-col xl:flex-row xl:items-center xl:justify-between xl:space-x-1'>
                  <p className='font-medium opacity-70 mb-2 xl:mb-0'>Profil</p>
                  <p className='font-medium text-sm sm:text-base'>REHAU Grazio 70, 5 kamerali</p>
                </li>
                <li className='py-2 border-b-2 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-1'>
                  <p className='font-medium opacity-70 mb-2 lg:mb-0'>Ikki oynali oyna</p>
                  <p className='font-medium text-sm sm:text-base'>2 kamerali, 32 mm</p>
                </li>
                <li className='py-2 border-b-2 flex flex-col'>
                  <p className='font-medium opacity-70 mb-2 xl:mb-0'>Ixchamlovchi</p>
                  <p className='font-medium text-sm sm:text-base'>Rehau Raucell: qora, kulrang, oq</p>
                </li>
                <li className='py-2 border-b-2 flex flex-col xl:flex-row xl:items-center xl:justify-between xl:space-x-1'>
                  <p className='font-medium opacity-70 mb-2 xl:mb-0'>Aksessuarlar</p>
                  <p className='font-medium text-sm sm:text-base'>Roto NT klassi - Premium</p>
                </li>
                <li className='pt-[30px]'>
                  <p className='text-lg font-normal space-x-2'><span className='font-semibold text-[25px] sm:text-[26px]'>7 300</span> dan so'm/m<sup>2</sup></p>
                  <Link to='/rehau-grazio' className='inline-block pt-6 font-semibold text-base underline underline-offset-8 opacity-70 hover:no-underline'>profil haqida batafsil</Link>
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div className='p-[30px] my-3 border border-opacity-70 rounded-xl'>
              <img className='overflow-hidden w-full h-full max-w-36 max-h-44 mb-5' src={profile3} alt="Rehau profili" />
              <Link to='/rehau-delight' className='inline-block mb-4'>
                <span className='inline-block mb-2 font-bold text-[22px] sm:text-[22px] md:text-2xl lg:text-[28px]'>Rehau Delight</span>
                <span className='inline-block font-medium'>Rehau Delight oynalari bilan xonaga 10% ko'proq yorug'lik kiradi - bu profil balandligining pasayishi tufayli.</span>
              </Link>
              <ul className='font-montserrat'>
                <li className='py-2 border-b-2 flex flex-col xl:flex-row xl:items-center xl:justify-between xl:space-x-1'>
                  <p className='font-medium opacity-70 mb-2 xl:mb-0'>Profil</p>
                  <p className='font-medium text-sm sm:text-base'>REHAU Delight 60, 5 kamerali</p>
                </li>
                <li className='py-2 border-b-2 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-1'>
                  <p className='font-medium opacity-70 mb-2 lg:mb-0'>Ikki oynali oyna</p>
                  <p className='font-medium text-sm sm:text-base'>2 kamerali, 32 mm</p>
                </li>
                <li className='py-2 border-b-2 flex flex-col'>
                  <p className='font-medium opacity-70 mb-2 xl:mb-0'>Ixchamlovchi</p>
                  <p className='font-medium text-sm sm:text-base'>Rehau Raucell: qora, kulrang, oq</p>
                </li>
                <li className='py-2 border-b-2 flex flex-col xl:flex-row xl:items-center xl:justify-between xl:space-x-1'>
                  <p className='font-medium opacity-70 mb-2 xl:mb-0'>Aksessuarlar</p>
                  <p className='font-medium text-sm sm:text-base'>Roto NT klassi - Premium</p>
                </li>
                <li className='pt-[30px]'>
                  <p className='text-lg font-normal space-x-2'><span className='font-semibold text-[25px] sm:text-[26px]'>8 250</span> dan so'm/m<sup>2</sup></p>
                  <Link to='/rehau-delight' className='inline-block pt-6 font-semibold text-base underline underline-offset-8 opacity-70 hover:no-underline'>profil haqida batafsil</Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="py-9">
        <div className="w-full max-w-base mx-auto px-5">
          <Tab />
        </div>
      </div>

      <div className='py-9'>
        <div className="w-full max-w-base mx-auto px-5">
          <div className='mb-5' data-aos="fade-up" data-aos-anchor-placement="center" data-aos-easing="ease-in" data-aos-duration="1000">
            <h2 className='text-2xl font-extrabold mb-2 md:text-30 lg:text-3xl xl:text-4xl'>Yaxshi derazalar uchun-yaxshi xizmat!</h2>
            <h3 className='text-base font-medium font-montserrat opacity-70'>Biz sifatni kafolatlaymiz, chunki bizning derazalarimiz sizning qulayligingiz uchun yaratilgan</h3>
          </div>
          <ul className='grid grid-cols-1 gap-3 md:grid-cols-2'>
            {
              service.map((servic) => {
                return (
                  <li key={servic.id}>
                    <img className='mb-3' src={servic.img} alt={servic.title} />
                    <h4 className='mb-1 font-bold text-22 md:text-2xl'>{servic.title}</h4>
                    <p className='font-medium opacity-60 text-base'>{servic.context}</p>
                  </li>
                )
              })
            }
          </ul>
          <div className='w-[45%]'>
            <img className='hidden lg:hidden absolute -right-80 w-full h-full overflow-hidden object-cover' src={serviceIMG} alt="service" />
          </div>
        </div>
      </div>

      <div className="py-9">
        <div className="w-full max-w-base mx-auto px-5" data-aos="fade-up" data-aos-anchor-placement="center" data-aos-easing="ease-in" data-aos-duration="1000">
          <form onSubmit={() => { checked && alert('Xat ketti'), !checked && alert('Iltimos bizning siyosatimiz qabul qiling!') }} className='px-8 py-10 w-full bg-lightGreen rounded-xl text-white xl:flex items-center justify-between xl:p-10'>
            <div className='xl:mr-12'>
              <h2 className='mb-2 text-2xl font-extrabold text-center md:text-3xl lg:text-32 lg:text-left xl:text-4xl'>Aniq hisob-kitob qilishni xohlaysizmi?</h2>
              <p className='text-sm text-center font-medium opacity-70 lg:text-left'>So'rov qoldiring va biz 10 daqiqa ichida qayta qo'ng'iroq qilamiz va buyurtmangizni hisoblaymiz</p>
            </div>
            <div className='xl:w-[525px]'>
              <div className='flex flex-col my-3'>
                <input className='py-4 text-sm bg-transparent font-montserrat border-b-2 outline-none focus:outline-none border-white border-opacity-50 transition-all duration-300 placeholder:text-white' placeholder='Ismingiz' type="text" required />
                <input className='py-4 text-sm bg-transparent font-montserrat border-b-2 outline-none focus:outline-none border-white border-opacity-50 transition-all duration-300 placeholder:text-white' placeholder='Telefon ragamingiz' pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}" type="tel" required />
              </div>
              <div className='md:flex items-center justify-between md:pt-2'>
                <div className='my-2 flex items-start md:mr-10 md:w-[500px] xl:w-64'>
                  <input onChange={() => setChecked(true)} width={20} height={20} className='w-10 h-5 mt-1 mr-3 bg-transparent cursor-pointer outline-none focus:outline-none xl:mr-3' id='check' type="checkbox" />
                  <label className='font-normal text-sm font-montserrat' htmlFor='check'>Men shaxsiy ma'lumotlarni qayta ishlash va <a className='underline' target='_blank' href="#">maxfiylik siyosatiga roziman.</a></label>
                </div>
                <div className='flex items-center justify-center md:block'>
                  <button type='submit' onSubmit={() => alert('Xat ketti')} className='inline-block py-7 px-9 w-52 bg-white text-mainBlack border-2 border-lightGreen font-bold font-raleway rounded-md hover:bg-lightGreen hover:text-white hover:border-white transition-all duration-500'>So'rov qoldirish</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className='py-9 bg-grey'>
        <div className="w-full max-w-base mx-auto px-5">
          <div className='mb-5 md:mb-8' data-aos="fade-up" data-aos-anchor-placement="center" data-aos-easing="ease-in" data-aos-duration="1000">
            <h2 className='mb-3 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-44'>Ish bosqichlari</h2>
            <p className='font-medium text-base opacity-70'>Muvaffaqiyatli hamkorlik qilish uchun atigi 6 qadam!</p>
          </div>
          <ul className='grid gap-3 grid-cols-1 lg:grid-cols-3'>
            {
              stagesOfWork.map((stage) => {
                return (
                  <li className='stageList px-5 py-8 border-2 rounded-xl relative  overflow-hidden' key={stage.id}>
                    <img className='mb-5 md:mb-6 w-14 h-14' width={60} height={60} src={stage.img} alt={stage.title} />
                    <h3 className='mb-2 font-bold text-xl sm:text-22 md:text-2xl lg:text-28'>{stage.title}</h3>
                    <p className='font-montserrat font-medium text-sm lg:text-base opacity-70'>{stage.context}</p>
                    <div className='absolute -bottom-5 right-5' data-aos="fade-left" data-aos-duration="1000">
                      <span className='font-bold text-7xl lg:text-8xl opacity-10'>{stage.id}</span>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className='py-9'>
        <div className="w-full max-w-base mx-auto px-5">
          <div className='space-y-3 mb-5 sm:mb-6 md:mb-9'>
            <h2 className='font-extrabold text-22 sm:text-2xl md:text-3xl xl:text-44'>Ishlab chiqarish kompaniyasi 2023 yil iyul oyida tashkil etilgan</h2>
            <p className='font-montserrat font-medium text-base opacity-70'>Eng yaxshi sotib olish shartlari bilan eng yaxshi oyna sifati</p>
          </div>
          <div className='space-y-3 mb-6  md:mb-9 lg:mb-8'>
            <h3 className='font-bold text-lg md:text-xl lg:text-22'>Benuqson xizmat - kompaniyaning imzo qo'lyozmasi</h3>
            <p className='font-montserrat font-medium text-base opacity-70'>Biz kunlik ish rejimini ta'minlaymiz. Malakali menejerlar har doim yordam ko'rsatishga va yuzaga keladigan har qanday savollarga javob berishga tayyor.</p>
          </div>
          <Link className='inline-block font-montserrat font-semibold text-base underline underline-offset-8 opacity-70 hover:no-underline'>Batafsil</Link>
        </div>
      </div>

    </>
  )
}

export default Home