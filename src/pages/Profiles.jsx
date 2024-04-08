import { Link } from "react-router-dom"

const Profiles = () => {
  return (
    <div className='py-9'>
      <div className="w-full max-w-base px-5 mx-auto">
        <h1 className="mb-5 text-22 font-extrabold sm:mb-6 sm:text-2xl md:text-3xl lg:mb-8 lg:text-32 xl:text-5xl">Profillar</h1>
        <p className="mb-4 text-base font-montserrat text-textGrey lg:text-lg lg:mb-6">Alyuminiy profilli derazalar kottejlarda, qishki bog'larda, gazeboslarda, kafelarda, vitrinalarda, teraslarda o'rnatiladi. Ular plastikdan ko'ra ko'proq yorug'lik beradi. Alyuminiydan tayyorlangan Profil tizimlari katta panoramali oynalar, eshiklar uchun javob beradi. Ular dizayn jihatidan xilma-xil bo'lgan katta yuklarga bardosh beradilar. Shovqinni, issiqlikni yaxshi izolyatsiya qiladigan termal qo'shimchali profillar mavjud.</p>
        <p className="mb-4 text-base font-montserrat text-textGrey lg:text-lg lg:mb-6">Alyuminiy derazalar bardoshli, bir necha o'n yillar davomida asl xususiyatlarini saqlab qoladi. Ular yomg'irga, olovga, mexanik stressga chidamli, zangdan qo'rqmaydi. Siz bizning kompaniyamizda Moskvada ishlab chiqaruvchidan alyuminiy deraza va eshiklarga buyurtma berishingiz mumkin. Biz 5 yillik kafolat bilan har qanday shakl va o'lchamdagi deraza tizimlarini ishlab chiqaramiz va o'rnatamiz.</p>
        <div className="space-y-3 py-6 flex flex-col items-start flex-wrap">
          <Link to='/profillar/Rehau Thermo' className="link">
            <span>Rehau Thermo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="#7f7f7f" d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.552.552 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.552.552 0 0 1 0-.771">
              </path>
            </svg>
          </Link>
          <Link to='/profillar/Rehau Grazio' className="link">
            <span>Rehau Grazio</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="#7f7f7f" d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.552.552 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.552.552 0 0 1 0-.771">
              </path>
            </svg>
          </Link>
          <Link to='/profillar/Rehau Delight' className="link">
            <span>Rehau Delight</span>
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

export default Profiles