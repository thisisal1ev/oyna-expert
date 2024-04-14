import { useParams } from "react-router-dom"
import { windows } from "../data"

const WindowsDetail = () => {
  const { title } = useParams();
  const detailWindows = windows.find((window) => {
    return window.title === title
  })

  return (
    <div className="py-9">
      <div className="w-full max-w-base mx-auto px-5">
        <div>
          <h1 className="mb-5 text-22 font-extrabold sm:mb-6 md:text-2xl lg:mb-8 lg:text-3xl">{detailWindows.title}</h1>
          <div className="text-textGrey font-montserrat">
            <p className="text-base leading-normal mb-4 lg:mb-6 md:text-lg xl:text-xl">{detailWindows.mainText}</p>
            <p className="text-base leading-normal mb-4 lg:mb-6 md:text-lg xl:text-xl">{detailWindows.context}</p>
            <h3 className="text-base pt-4 mb-4 lg:mb-6 md:text-lg xl:text-xl">{detailWindows.sectionTitle}</h3>
            <ul className="list-disc ml-4 pb-4">
              {
                detailWindows.charakteristic.map((text,index) => {
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

export default WindowsDetail