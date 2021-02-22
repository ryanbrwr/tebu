import React from "react"
import { Redirect } from "react-router-dom"
import fire from "../fire"
import "./scss/dashboard.scss"

import Navbar from "../components/dashboard/Navbar/Navbar"
import Footer from "../components/main/Footer/Footer"
import Buy from "../components/dashboard/Buy/Buy"

const Dashboard = (props) => {
  if (props.user) {
    return (
      <div>
        <Navbar />
        <div className="dashboardContainer">
          <div className="dashboardWrapper">
            <Buy />
          </div>
        </div>
        <Footer purple />
      </div>
    )
  }
  return <Redirect to="/signin" />
}

export default Dashboard
