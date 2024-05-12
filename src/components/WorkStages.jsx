//data
import { stagesOfWork } from '../data'

const WorkStages = () => {
  return (
    <div className='py-9 bg-grey'>

      <div className="w-full max-w-base mx-auto px-5">

        <div className='mb-5 md:mb-8'>
          <h2 className='mb-3 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-44'>Ish bosqichlari</h2>
          <p className='font-medium font-montserrat text-base text-textGrey'>Muvaffaqiyatli hamkorlik qilish uchun atigi 6 qadam!</p>
        </div>

        <ul className='grid gap-3 grid-cols-1 lg:grid-cols-3'>
          {
            stagesOfWork.map((stage) => {
              return (
                <li className='stageList px-5 py-8 border-2 rounded-xl relative overflow-hidden last:border-orange' key={stage.id}>
                  <img className='mb-5 md:mb-6 w-14 h-14' width={60} height={60} src={stage.img} alt={stage.title} />
                  <h3 className='mb-2 font-bold text-xl sm:text-22 md:text-2xl lg:text-28'>{stage.title}</h3>
                  <p className='font-montserrat font-medium text-sm lg:text-base text-textGrey relative z-1'>{stage.context}</p>
                  <div className='absolute -bottom-5 right-5' data-aos="fade-left" data-aos-duration="800">
                    <span className='font-bold text-7xl lg:text-8xl opacity-10 select-none'>{stage.id}</span>
                  </div>
                </li>
              )
            })
          }
        </ul>

      </div>

    </div>
  )
}

export default WorkStages