import { Link } from "react-router-dom"

//photo
import sbor from '../assets/img/sbor-informasii.jpg'
import optimizasiya from '../assets/img/optimizasiya.jpg'

const PostComponent = () => {
  return (
    <div className="py-9">

      <div className="w-full max-w-base mx-auto px-5">

        <h2 className="mb-4 font-extrabold text-xl sm:text-22 md:text-2xl lg:text-4xl xl:text-44 xl:mb-11">Bilish foydali</h2>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">

          <div className="lg:flex lg:mr-[1.5%]">
            <div className="mb-6 h-44 sm:h-72 md:h-auto rounded-xl overflow-hidden lg:mr-5 xl:mr-8 lg:w-full lg:h-full">
              <img className="w-full h-full" src={sbor} alt="photo" />
            </div>
            <div>
              <span className="mb-2 font-montserrat font-medium text-sm text-textGrey">8 Iyul 2022</span>
              <h3 className="mb-2 font-bold text-xl sm:text-22 md:text-2xl lg:text-28">Ma&apos;lumot to&apos;plash</h3>
              <p className="mb-5 font-medium font-montserrat text-sm text-textGrey">Qanday bo'lmasin, ushbu mavzu bo'yicha qaysi mutaxassis bo'lishingizdan qat'i nazar, boshqa mualliflarning materiallari bilan tanishish tavsiya etiladi.</p>
              <Link to='/blog' className='inline-block font-montserrat font-semibold text-base underline underline-offset-8 text-textGrey transition-all duration-300 hover:no-underline hover:text-mainBlack'>Batafsil</Link>
            </div>
          </div>

          <div className="lg:flex">
            <div className="mb-6 h-44 sm:h-72 md:h-auto rounded-xl overflow-hidden lg:mr-5 xl:mr-8 lg:w-full lg:h-full">
              <img className="w-full h-full" src={optimizasiya} alt="photo" />
            </div>
            <div>
              <span className="mb-2 font-montserrat font-medium text-sm text-textGrey">1 Mart 2022</span>
              <h3 className="mb-2 font-bold text-xl sm:text-22 md:text-2xl lg:text-28">Blog uchun maqolani optimallashtirish</h3>
              <p className="mb-5 font-medium font-montserrat text-sm text-textGrey">Nima uchun bu qator ikkinchi o'rinda turadi? Chunki ma'lumot to'plangandan so'ng, siz maqolani optimallashtirishga tayyorgarlikni boshlashingiz kerak.</p>
              <Link to='/blog' className='inline-block font-montserrat font-semibold text-base underline underline-offset-8 text-textGrey transition-all duration-300 hover:no-underline hover:text-mainBlack'>Batafsil</Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default PostComponent