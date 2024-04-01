//photos
import serviceIMG from '../assets/img/devushka-sidit-pered-oknom.webp'

//data
import { service } from '../data'

const Service = () => {
  return (
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
  )
}

export default Service