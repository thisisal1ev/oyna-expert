import React from 'react'
import { Link } from 'react-router-dom'

//data
import { balconies } from '../data'

const Balconies = () => {
  return (
    <div className='py-9'>

      <div className="w-full max-w-base mx-auto px-5">

        <h1 className="mb-5 text-22 font-extrabold sm:mb-6 sm:text-2xl md:text-3xl lg:mb-8 lg:text-32 xl:text-5xl">Balkonlar</h1>

        <div className='font-montserrat text-textGrey mb-6 space-y-4 lg:mb-8 lg:space-y-6'>

          <p className='text-base lg:text-lg xl:text-xl'>Bizning kompaniyamiz har qanday shakl va o&apos;lchamdagi balkonlar va lojikalarni sirlaydi. Biz issiq rehau plastik profilidan yoki provedal sovuq alyuminiydan oynalar yasaymiz va o&apos;rnatamiz. Biz parapetni mustahkamlash, masofadan turib va  panoramali oynalar, pardozlash, lojikalarni xona bilan birlashtirishni amalga oshiramiz. Biz bajarilgan ishlarga kafolat beramiz, kafolatdan keyingi va xizmat ko&apos;rsatishni amalga oshiramiz.</p>
          <h2 className='font-bold text-lg xl:text-2xl'>Issiq oynalash</h2>
          <p className='text-base lg:text-lg xl:text-xl'>Plastik derazalar balkonni sovuqdan, ko&apos;cha shovqinidan himoya qiladi. Issiqlik izolatsiyasi yuqori bo&apos;lgan Profil tizimlari mavjud. PVX oynali loggiada qo&apos;shimcha izolyatsiya bilan, hatto qishda ham iliq bo&apos;ladi. U yashash xonasi, bolalar bog&apos;chasi, ish xonasi yoki yotoqxona sifatida bezatilishi mumkin.</p>
          <h2 className='font-bold text-lg xl:text-2xl'>Sovuq oynalash</h2>
          <p className='text-base lg:text-lg xl:text-xl'>Suruladigon alyuminiy derazalar joyni tejaydi, balkonni yog&apos;ingarchilik, qoralama, changdan himoya qiladi. Bunday tuzilmalar ozgina vaznga ega, poydevorga yuklamaydi. Bu balkonni yashash maydonining bir qismiga aylantirishni rejalashtirmaganlar uchun iqtisodiy variant.</p>
          <h2 className='font-bold text-lg xl:text-2xl'>Poldan shiftgacha oynalash</h2>
          <p className='text-base lg:text-lg xl:text-xl'>Butun devorga sirlangan balkonlar maksimal quyosh nuri tushishiga imkon beradi, atrofni ko&apos;rish imkoniyatini beradi. Panoramik derazalar yuqori issiqlik izolatsiyasiga ega profillardan tayyorlanadi, energiya tejaydigan stelkopaket bilan to&apos;ldiriladi.</p>

        </div>

        <div className='space-y-3 py-6 flex flex-col items-start flex-wrap'>
          {
            balconies.map((balcon) => {
              return (
                <Link key={balcon.id} to={`/balkonlar/${balcon.title}`} className="link">
                  <span>{balcon.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                    <path fill="#7f7f7f" d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.552.552 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.552.552 0 0 1 0-.771">
                    </path>
                  </svg>
                </Link>
              )
            })
          }
        </div>

      </div>

    </div>
  )
}

export default Balconies