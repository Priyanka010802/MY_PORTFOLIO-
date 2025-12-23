import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutme from '../components/about'
import Skill from '../components/skills'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Aboutme/>
        <Skill/>
        <Work/>
         <Contact/>
         <Footer/>
    </div>
  )
}

export default Home