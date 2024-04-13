import React from 'react'
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div className='py-3%'>

      <div className="content-container">

        <h1 className='mb-3% font-extrabold text-22 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>To&apos;lov shartlari</h1>

        <div className='text-textGrey font-montserrat space-y-4 lg:space-y-6'>
          <p className='lg:text-lg xl:text-xl'>Ushbu blokda siz taqdim etayotgan xizmatlar haqida kirish maqolasini ham, takliflarning to&apos;liq katalogini ham joylashtirishingiz mumkin.</p>
          <p className='lg:text-lg xl:text-xl'>Xizmatlarni tematik toifalarga ajratish foydali bo'lishi mumkin.</p>
          <p className='lg:text-lg xl:text-xl'>Xizmat haqida batafsil ma'lumot, turli xarakteristikalar, rasmlar, narxlar, qo'llaniladigan chegirmalar va joriy aktsiyalar va boshqalar haqida ma'lumotni o'z ichiga olgan xizmat kartalari bo'lishi mumkin. batafsil tavsif va buyurtma berish imkoniyati bilan xizmat sahifasiga o'tish imkoniyati bilan.</p>
        </div>

        <div className='text-textGrey font-montserrat'>

          <h2 className='my-4 text-22 font-bold sm:text-2xl md:text-26 lg:text-28 xl:text-32'>Bunday bo&apos;limni to&apos;ldirishga misol:</h2>

          <div className='space-y-4 lg:space-y-6'>

            <p className='lg:text-lg xl:text-xl'>Bizning mutaxassislarimiz sizga har doim keng ko'lamli xizmatlarni taklif qilishdan mamnun. Bizning xodimlarimiz sizga hamrohlik qilishga va yo'l-yo'riq ko'rsatishga tayyor bo'lgan faqat yuqori malakali, tajribali xodimlardan iborat.</p>
            <p className='lg:text-lg xl:text-xl'>Taqdim etilgan xizmatlar orasida sizga quyidagilar taqdim etilishi mumkin:</p>

          </div>

          <ul className='my-3 md:my-5 list-disc space-y-2'>

            <li className='ml-4 lg:text-lg xl:text-xl'>
              <strong>Kredit berish va maslahat</strong> . Bizning xodimlarimiz sizga eng qulay kredit shartlarini tanlashda yordam beradi, sizga barcha nozikliklar va nuanslar haqida aytib beradi va agar kerak bo'lsa, barcha kerakli hujjatlarni to'plashda yordam beradi. Kredit olish uchun tezda bizning ofisimizga murojaat qilish mumkin.
            </li>

            <li className='ml-4 lg:text-lg xl:text-xl'>
              <strong>Kafolat xizmati</strong> . Har qanday mahsulotimiz bepul kafolatli xizmat va kafolatdan keyingi pullik yordam bilan ta'minlanadi.
            </li>

            <li className='ml-4 lg:text-lg xl:text-xl'>
              <strong>Komponentlar , aksessuarlar va boshqa ko'p narsalarni</strong> buyurtma qiling . Bizning do'konlarimizda siz har doim o'zingizni qiziqtirgan mahsulotga buyurtma berishingiz mumkin. Agar siz izlayotgan mahsulot omborda yoki hatto katalogda bo'lmasa ham, siz har doim bizning xodimlarimizga so'rov qoldirishingiz va so'rovingizga yaqin vaqt ichida javob olishingiz mumkin.
            </li>

            <li className='ml-4 lg:text-lg xl:text-xl'>
              <strong>Sotib olish va almashtirish</strong> . Bizdan sotib olingan mahsulotlar endi sizning ehtiyojlaringizni qondirmaydimi? Yangisini sotib olmoqchimisiz? Bizning professional baholovchilarimizga murojaat qilish kifoya, ularga sizda qanday tovarlar borligi, ular qanday holatda ekanligi, qanday narx belgilamoqchisiz yoki nimaga almashtirmoqchisiz va hokazolarni aytsangiz, bizning xodimlarimiz sizni ortiqcha ovoragarchilikdan xalos qiladi.
            </li>

          </ul>

        </div>

        <div className='space-y-3 py-6 flex flex-col items-start flex-wrap'>

          <Link to='/to&apos;lov/yetkazib berish' className='link'>

            <span>Yetkazib berish</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="#7f7f7f" d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.552.552 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.552.552 0 0 1 0-.771">
              </path>
            </svg>

          </Link>

          <Link to='/to&apos;lov/to&apos;lov usullari' className='link'>

            <span>To&apos;lov usullari</span>

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

export default Payment