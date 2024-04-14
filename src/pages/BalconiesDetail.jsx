import { useParams } from "react-router-dom"
import { balconies } from "../data"

const BalconiesDetail = () => {
  const { title } = useParams();
  const detailBalconies = balconies.find((balcon) => {
    return balcon.title === title
  })

  return (
    <div className="py-9">
      <div className="w-full max-w-base mx-auto px-5">
        <div>
          <h1 className="mb-5 text-22 font-extrabold sm:mb-6 md:text-2xl lg:mb-8 lg:text-3xl">{detailBalconies.title}</h1>
          <div className="text-textGrey font-montserrat">
            <p className="text-base leading-normal mb-4 lg:mb-6 md:text-lg xl:text-xl">{detailBalconies.mainText}</p>
            <p className="text-base leading-normal mb-4 lg:mb-6 md:text-lg xl:text-xl">{detailBalconies.context}</p>
            <h3 className="text-base pt-4 mb-4 lg:mb-6 md:text-lg xl:text-2xl">{detailBalconies.sectionTitle}</h3>
            <ul className="list-disc pb-4 ml-4">
              {
                detailBalconies.charakteristic.map((text,index) => {
                  return (
                    <li className="md:text-lg" key={index}>{text}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BalconiesDetail