import React, { useEffect, useState } from "react"
import AboutHero from "../components/main/PageHero/PageHero"
import MissionSection from "../components/main/PageContent/PageContent"
import Navbar from "../components/main/Navbar/Navbar"
import Sidebar from "../components/main/Sidebar/Sidebar"
import Footer from "../components/main/Footer/Footer"

const Faq = () => {
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
      <AboutHero pageTitle="Frequently Asked Questions" />
      <MissionSection
        header="How does Tebu work?"
        description="Tebu is a scheduler that makes API calls to your given market. If you set a daily buy, we just tell your market every day to purchase new coins."
        small
      />
      <MissionSection
        header="Can you see my bank account information?"
        description="Tebu uses market APIs, which means that we never have access to any of your personal data. All we have access to do is make scheduled purchases on your behalf."
        small
      />
      <MissionSection
        header="How much does this cost?"
        description="Tebu takes a 0.15% fee on transactions made using the scheduler, this means that every $10.00 you spend you pay 1.5 cents."
        small
      />
      <MissionSection
        header="What markets are currently supported?"
        description="As of right now Tebu supports Coinbase Pro and Kraken, but the team is adding new markets every week."
        small
      />
      <MissionSection
        header="Where can I find my market API key?"
        description="We have a list of YouTube tutorials to help you find your API keys, click here for help finding your key"
        small
      />
      <Footer />
    </div>
  )
}

export default Faq
