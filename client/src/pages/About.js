import React, { useEffect, useState } from "react"
import AboutHero from "../components/main/PageHero/PageHero"
import MissionSection from "../components/main/PageContent/PageContent"
import Navbar from "../components/main/Navbar/Navbar"
import Sidebar from "../components/main/Sidebar/Sidebar"
import Footer from "../components/main/Footer/Footer"

const About = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Sidebar sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <AboutHero pageTitle="About Tebu" />
      <MissionSection
        header={
          "Tebu's mission is to help you schedule crypto investments to leverage the power of dollar cost averaging"
        }
        description="With Tebu, you can connect to nearly any market with your API key. After inputting your API key, you can schedule daily, weekly, or monthly reccurring buys to make sure you get the best price for your crypto. With Tebu you can trade any of the assets offered by your market, including Bitcoin, Ethereum and Litecoin. We believe that the best way to invest in crypto is slowly, accumulating assets over time"
      />
      <Footer />
    </div>
  )
}

export default About
