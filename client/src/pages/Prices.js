import React, { useState } from "react"

import Table from "../components/prices/Table/Table"
import Footer from "../components/main/Footer/Footer"
import Navbar from "../components/main/Navbar/Navbar"
import Sidebar from "../components/main/Sidebar/Sidebar"

const Prices = (props) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen)
  }
  return (
    <div>
      <Sidebar sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <Table />
      <Footer />
    </div>
  )
}

export default Prices
