import React, { useState } from "react"
import Hero from "../components/home/Hero/Hero"
import Info from "../components/home/Info/Info"

import Footer from "../components/main/Footer/Footer"
import Navbar from "../components/main/Navbar/Navbar"
import Sidebar from "../components/main/Sidebar/Sidebar"

import { homeObjOne, homeObjTwo } from "../components/home/Info/Data"
import Services from "../components/home/Services/Services"

const Home = (props) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen)
  }
  return (
    <div>
      <Sidebar sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} user={props.user} />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Footer />
    </div>
  )
}

export default Home
