import React from 'react'
//components
import Complement from '../components/Complement'
import Profiles from '../components/Profiles'
import Hero from '../components/Hero'
import Tab from '../components/Tab'
import Service from '../components/Service'
import CTA from '../components/CTA'
import WorkStages from '../components/WorkStages'
import About from '../components/About'
import PostComponent from '../components/PostComponent'
import Stocks from '../components/Stocks'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <>

      <Hero />

      <Profiles />

      <Tab />

      <Stocks />

      <Service />

      <CTA />

      <WorkStages />

      <Gallery />

      <Complement />

      <PostComponent />

      <Reviews />

      <About />

    </>
  )
}

export default Home