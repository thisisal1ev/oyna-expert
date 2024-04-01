//data
import { Link } from "react-router-dom"
import { komplekt } from "../data"

const Complement = () => {
  return (
    <div className="py-9 bg-grey">
      <div className="w-full max-w-base mx-auto px-5">
        <div className="mb-3 sm:mb-5 md:mb-6 lg:mb-8" data-aos="fade-up" data-aos-anchor-placement="center" data-aos-easing="ease-in" data-aos-duration="1000">
          <h2 className="font-extrabold text-22 sm:text-2xl md:text-3xl lg:text-4xl">Biz derazalarni kerakli narsalar bilan to'ldiramiz</h2>
        </div>

        <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {
            komplekt.map((komplekt) => {
              return (
                <li key={komplekt.id}>
                  <Link to='/service'>
                    <img className="rounded-xl mb-6 lg:mb-8" src={komplekt.img} alt={komplekt.title} />
                    <div>
                      <h3 className="font-bold mb-3 text-22 md:text-2xl lg:text-28">{komplekt.title}</h3>
                      <p className="font-montserrat opacity-70">{komplekt.text}</p>
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