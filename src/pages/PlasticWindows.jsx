import React from 'react'
import { Link } from 'react-router-dom'

// data
import { windows } from '../data';

const PlasticWindows = () => {
  return (
    <div className='py-9'>

      <div className="w-full max-w-base mx-auto px-5">

        <h1 className="mb-5 text-22 font-extrabold sm:mb-6 sm:text-2xl md:text-3xl lg:mb-8 lg:text-32 xl:text-5xl">Plastik oynalar</h1>
        <p className='mb-6 text-base font-montserrat text-textGrey lg:text-lg xl:text-xl lg:mb-10'>Oyna texnologiyalari - Andijondagi REHAU oynalarining rasmiy yetkazib beruvchisi. Biz original plastik profillardan deraza va eshiklarni ishlab chiqaramiz: Blitz, Delight, Brillant-Design, Geneo, Intelio, Grazio. Biz ishlab chiqarishda Germaniyaning Siegenia va Roto armaturalaridan foydalanamiz. Biz ishlab chiqarilgan tuzilmalar va bajarilgan oynalash ishlariga 5 yil kafolat beramiz. Biz 5 kun ichida o&apos;lchash, ishlab chiqarish va o&apos;rnatishni amalga oshiramiz.</p>

        <div className='space-y-3 py-6 flex flex-col items-start flex-wrap'>
          {
            windows.map((window) => {
              return (
                <Link key={window.id} to={`/plastik oynalar/${window.title}`} className="link">
                  <span>{window.title}</span>
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

export default PlasticWindows