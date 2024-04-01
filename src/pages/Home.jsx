import { Link } from 'react-router-dom'

//components
import Complement from '../components/Complement'
import Profiles from '../components/Profiles'
import Hero from '../components/Hero'
import Tab from '../components/Tab'
import Service from '../components/Service'
import CTA from '../components/CTA'
import WorkStages from '../components/WorkStages'
import About from '../components/About'

const Home = () => {

  return (
    <>

      <Hero />

      <Profiles />

      <Tab />

      <Service />

      <CTA />

      <WorkStages />

      <Complement />

      <About />

    </>
  )
}

export default Home