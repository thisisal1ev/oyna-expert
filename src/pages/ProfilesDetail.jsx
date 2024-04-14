import { useParams } from "react-router-dom"
import { profiles } from "../data"

const ProfilesDetail = () => {
  const { title } = useParams();
  const detailProfiles = profiles.find((profile) => {
    return profile.title === title
  })

  return (
    <div className="py-9">
      <div className="w-full max-w-base mx-auto px-5">
        <div>
          <h1 className="mb-5 text-22 font-extrabold sm:mb-6 md:text-2xl lg:mb-8 lg:text-3xl">{detailProfiles.title}</h1>
          <div className="text-textGrey font-montserrat">
            <p className="text-base leading-normal mb-4 lg:mb-6 md:text-lg xl:text-xl">{detailProfiles.mainText}</p>
            <h3 className="text-base pt-4 mb-4 lg:mb-6 md:text-lg">{detailProfiles.sectionTitle}</h3>
            <ul className="list-disc pb-4 ml-4">
              {
                detailProfiles.context.map((text,index) => {
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

export default ProfilesDetail