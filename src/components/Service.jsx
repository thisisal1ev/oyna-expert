//photos
import serviceIMG from '../assets/img/devushka-sidit-pered-oknom.webp'

//data
import { services } from '../data'

const Service = () => {
  return (
    <div className='py-9'>
      <div className="w-full max-w-base mx-auto px-5">
        <div className='mb-5' data-aos="fade-up" data-aos-anchor-placement="center" data-aos-easing="ease-in" data-aos-duration="800">
          <h2 className='text-2xl font-extrabold mb-2 md:text-30 lg:text-3xl xl:text-4xl'>Yaxshi derazalar uchun-yaxshi xizmat!</h2>
          <h3 className='text-base font-medium font-montserrat text-textGrey'>Biz sifatni kafolatlaymiz, chunki bizning derazalarimiz sizning qulayligingiz uchun yaratilgan</h3>
        </div>
        <ul className='grid grid-cols-1 gap-3 md:grid-cols-2'>
          {
            services.map((service) => {
              return (
                <li key={service.id}>
                  <img className='mb-3' src={service.img} alt={service.title} />
                  <h4 className='mb-1 font-bold text-22 md:text-2xl'>{service.title}</h4>
                  <p className='font-medium text-textGrey text-base'>{service.context}</p>
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