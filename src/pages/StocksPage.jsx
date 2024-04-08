//data
import { stocks } from "../data"

const StocksPage = () => {
  return (
    <div className='py-9'>
      <div className="w-full max-w-base mx-auto px-5">
        <h1 className='mb-5 text-22 font-extrabold sm:mb-6 sm:text-2xl md:text-3xl lg:mb-8 lg:text-32 xl:text-5xl'>Aksiyalar</h1>
        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {
            stocks.map((stock) => {
              return (
                <li key={stock.id} className="text-textGrey">
                  <img className="mb-2" src={stock.img} alt={stock.title} />
                  <div className="mt-1 mb-4 font-montserrat space-y-2 lg:space-y-3">
                    <span className="inline-block">{stock.date}</span>
                    <h3 className="font-bold text-xl sm:text-22 lg:text-26">{stock.title}</h3>
                    <p>{stock.context}</p>
                  </div>
                  <a className="inline-block font-montserrat text-center text-lg text-white bg-primaryBlue rounded-md w-full py-2 px-5 lg:px-6 xl:px-8 hover:opacity-70 transition-all duration-500" href="#">Batafsil</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default StocksPage