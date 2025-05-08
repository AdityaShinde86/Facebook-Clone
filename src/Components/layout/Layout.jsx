import React from 'react'
import Rightbar from '../rightbar/RightBar'
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar'
import Home from '../../Pages/home/Home'
import Feed from '../feed/Feed'

function Layout() {
  return (
   <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <Rightbar/>
   </div>
   </>
  )
}

export default Layout