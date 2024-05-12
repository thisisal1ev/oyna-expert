//data
import { Link } from "react-router-dom"
import { komplekt } from "../data"

const Complement = () => {
  return (
    <div className="py-9 bg-grey">
      <div className="w-full max-w-base mx-auto px-5">
        <div className="mb-3 sm:mb-5 md:mb-6 lg:mb-8">
          <h2 className="font-extrabold text-22 sm:text-2xl md:text-3xl lg:text-4xl xl:text-44">Biz derazalarni kerakli narsalar bilan to&apos;ldiramiz</h2>
        </div>

        <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {
            komplekt.map((komplekt) => {
              return (
                <li key={komplekt.id}>
                  <Link to='/xizmat ko&apos;rsatish'>
                    <div className="rounded-xl overflow-hidden w-auto object-cover h-60 mb-6 sm:h-80 md:h-auto lg:mb-8">
                      <img className="w-full h-full" src={komplekt.img} alt={komplekt.title} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-3 text-22 md:text-2xl lg:text-28">{komplekt.title}</h3>
                      <p className="font-montserrat text-textGrey">{komplekt.text}</p>
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Complement