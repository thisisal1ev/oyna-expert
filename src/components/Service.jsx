//photos
import serviceIMG from '../assets/img/devushka-sidit-pered-oknom.webp'

//data
import { services } from '../data'

const Service = () => {
  return (
    <div className='py-9 lg:py-[6%] relative lg:overflow-hidden'>

      <div className="w-full max-w-base mx-auto px-5">

        <div className='mb-[7%]'>

          <h2 className='text-2xl font-extrabold mb-3 md:text-3xl lg:text-4xl xl:text-44'>Yaxshi derazalar uchun-yaxshi xizmat!</h2>
          <h3 className='text-base font-medium font-montserrat text-textGrey'>Biz sifatni kafolatlaymiz, chunki bizning derazalarimiz sizning qulayligingiz uchun yaratilgan</h3>

        </div>

        <div className='flex'>

          <ul className='grid grid-cols-1 gap-[2%] md:grid-cols-2'>
            {
              services.map((service) => {
                return (
                  <li key={service.id}>
                    <img className='mb-3' width={90} height={90} src={service.img} alt={service.title} />
                    <h4 className='mb-1 font-bold text-22 md:text-2xl'>{service.title}</h4>
                    <p className='font-medium font-montserrat text-textGrey text-base'>{service.context}</p>
                  </li>
                )
              })
            }
          </ul>

          <div className='hidden opacity-0 lg:opacity-100 lg:w-full lg:block'>
            <img className='absolute -right-20 top-0 w-[45%] h-full object-cover bg-cover -z-10' src={serviceIMG} alt="service" />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Service