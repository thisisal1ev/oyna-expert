import React from 'react'
import { Link } from 'react-router-dom'

//data
import { servicesPage } from '../data'

const Services = () => {
  return (
    <div className='py-9'>

      <div className="w-full max-w-base mx-auto px-5">

        <h1 className='mb-6 font-extrabold text-22 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:mb-8 lg:mb-9 xl:mb-11'>Xizmat ko&apos;rsatish</h1>
        <div className='font-montserrat text-textGrey mb-6 space-y-4 lg:mb-8 lg:space-y-6'>
          <p className='text-base lg:text-lg xl:text-xl'>Bizning kompaniyamiz uzoq vaqtdan beri REHAU oyna profillarini muvaffaqiyatli etkazib beradi, shuningdek, etkazib berish va o&apos;rnatish xizmatlarini, balkonlar va lodjiyalarni oynalashni taklif qiladi. Tashkil etilganimizdan beri bizning asosiy tamoyillarimiz mas&apos;uliyat, samaradorlik va o&apos;zaro manfaatdorlik bo&apos;lib qoldi.</p>
          <p className='text-base lg:text-lg xl:text-xl'>Bizning ishimizda xizmat ko&apos;rsatish darajasiga alohida e&apos;tibor qaratiladi: biz har bir mijoz hamkorlikning barcha bosqichlarida - o&apos;lchashdan tortib o&apos;rnatishgacha o&apos;zini qulay his qilishiga ishonch hosil qilamiz. Har bir xodimimizning professionalligi, yaxshi muvofiqlashtirilgan jamoaviy ish va individual yondashuv tufayli biz benuqson natijani kafolatlaymiz.</p>
          <p className='text-base lg:text-lg xl:text-xl'>Bizdan siz o&apos;rtacha narxlarda yuqori sifatli oynalash xizmatlariga buyurtma berishingiz mumkin. Sizning so&apos;rovingiz bo&apos;yicha plastik deraza va eshiklar to&apos;g&apos;ridan-to&apos;g&apos;ri uyingiz ostonasigacha yetkaziladi, so&apos;ngra ularni o&apos;rnatish va pardozlash ishlari siz uchun qulay vaqtda amalga oshiriladi. </p>
          <h2 className='font-bold text-xl md:text-2xl lg:text-32 xl:text-4xl'>Deraza ishlab chiqarish vaqtlari:</h2>

          <ul className='list-disc ml-4'>
            <li className="md:text-lg xl:text-xl">Eshik va derazalarni ishlab chiqarish - 5 kun</li>
            <li className="md:text-lg xl:text-xl">Yetkazib berish - 1 kun ichida</li>
            <li className="md:text-lg xl:text-xl">Eski eshik yoki derazani olib tashlash, o&apos;rnatish va tugatish ishlari - 1 kun</li>
          </ul>

          <p className='font-montserrat text-textGrey md:text-lg xl:text-xl'>O&apos;rnatishdan keyin 5 yil kafolat beriladi.</p>

        </div>

        <div className='space-y-3 py-6 flex flex-col items-start flex-wrap'>
          {
            servicesPage.map((service) => {
              return (
                <Link key={service.id} to={`/xizmat ko'rsatish/${service.title}`} className="link">
                  <span>{service.title}</span>
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

export default Services