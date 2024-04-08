import React from 'react'
import { Link } from 'react-router-dom'
import { windows } from '../data';

const PlasticWindows = () => {


  return (
    <div className='py-9'>
      <div className="w-full max-w-base mx-auto px-5">
        <h1 className="mb-5 text-22 font-extrabold sm:mb-6 sm:text-2xl md:text-3xl lg:mb-8 lg:text-32 xl:text-5xl">Plastik oynalar</h1>
        <p className='mb-6 text-base font-montserrat text-textGrey lg:text-lg lg:mb-10'>«Оконные технологии» — официальный поставщик окон REHAU в Москве. Мы изготавливаем окна и двери из оригинальных пластиковых профилей: Blitz, Delight, Brillant-Design, Geneo, Intelio, Grazio. Используем в производстве немецкую фурнитуру Siegenia и Roto. Даем гарантии на изготовленные конструкции и на выполненные работы по остеклению — 5 лет. Выполняем замер, производство и монтаж в течение 5 дней.</p>
        <div className='space-y-3 py-6 flex flex-col items-start flex-wrap'>
          <Link to={`/oynalar/${windows[0].title}`} className="link">
            <span>Rehau Thermo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="#7f7f7f" d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.552.552 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.552.552 0 0 1 0-.771">
              </path>
            </svg>
          </Link>
          <Link to={`/oynalar/${windows[1].title}`} className="link">
            <span>Rehau Thermo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="#7f7f7f" d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.552.552 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.552.552 0 0 1 0-.771">
              </path>
            </svg>
          </Link>
          <Link to={`/oynalar/${windows[2].title}`} className="link">
            <span>Rehau Thermo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="#7f7f7f" d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.552.552 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.552.552 0 0 1 0-.771">
              </path>
            </svg>
          </Link>
          <Link to={`/oynalar/${windows[3].title}`} className="link">
            <span>Rehau Thermo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="#7f7f7f" d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.552.552 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.552.552 0 0 1 0-.771">
              </path>
            </svg>
          </Link>
          <Link to={`/oynalar/${windows[4].title}`} className="link">
            <span>Rehau Thermo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="#7f7f7f" d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.552.552 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.552.552 0 0 1 0-.771">
              </path>
            </svg>
          </Link>
          <Link to={`/oynalar/${windows[5].title}`} className="link">
            <span>Rehau Thermo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="#7f7f7f" d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.552.552 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.552.552 0 0 1 0-.771">
              </path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PlasticWindows