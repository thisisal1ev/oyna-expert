import { useParams } from "react-router-dom"

//data
import { servicesPage } from "../data";

const ServicesDetail = () => {
  const { title } = useParams();
  const detailServices = servicesPage.find((service) => {
    return service.title === title
  })

  return (
    <div className="py-9">
      <div className="w-full max-w-base mx-auto px-5">
        <div>
          <h1 className="mb-5 text-22 font-extrabold sm:mb-6 md:text-2xl lg:mb-8 lg:text-3xl">{detailServices.title}</h1>
          <div className="text-textGrey font-montserrat space-y-4 lg:space-y-6">
            <p className="text-base leading-normal md:text-lg xl:text-xl">{detailServices.maintext}</p>
            <p className="text-base leading-normal md:text-lg xl:text-xl">{detailServices.context}</p>
            <h3 className="text-base pt-4 md:text-lg xl:text-xl">{detailServices.sectiontitle}</h3>
            <ul className="list-disc pb-4 ml-4">
              {
                detailServices.charakteristic.map((text, index) => {
                  return (
                    <li className="md:text-lg xl:text-xl" key={index}>{text}</li>
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

export default ServicesDetail