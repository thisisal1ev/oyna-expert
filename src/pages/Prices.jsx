//data
import { priceList } from "../data"

const Prices = () => {
  return (
    <div className='py-9'>
      <div className="w-full max-w-base mx-auto px-5">
        <h1 className='mb-6 font-extrabold text-22 sm:text-2xl md:3xl lg:text-4xl xl:text-38 sm:mb-8 lg:mb-9 xl:mb-11'>Narxlar</h1>
        <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            priceList.map((priceListItem) => {
              return (
                <li key={priceListItem.id}>
                  <img className="mb-5" src={priceListItem.img} alt={priceListItem.title} />
                  <div className="text-textGrey font-montserrat mb-3 space-y-3 lg:space-y-4 xl:space-y-5">
                    <h3 className="font-bold text-xl sm:text-22 xl:text-26">{priceListItem.title}</h3>
                    <p>{priceListItem.context}</p>
                    <ul className="list-disc">
                      {
                        priceListItem.charakteristic.map((charakteristic) => {
                          return (
                            <li className="ml-4" key={priceListItem.id}>{charakteristic}</li>
                          )
                        })
                      }
                    </ul>
                    <p className="flex flex-col space-y-1">
                      <span>Bir kunlik narxi:</span>
                      <span className="text-22 font-bold sm:text-2xl md:text-26 lg:text-28">{priceListItem.price} so'mdan</span>
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button className="py-2 px-5 text-lg text-white bg-primaryBlue rounded-md transition-all duration-300 hover:opacity-70">Batafsil</button>
                    <button className="py-2 px-5 text-lg text-textGrey bg-skyblue rounded-md transition-all duration-300 hover:opacity-70">Batafsil</button>
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

export default Prices