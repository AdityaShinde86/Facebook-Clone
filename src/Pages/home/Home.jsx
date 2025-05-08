import './Home.css'
import Topbar from '../../Components/topbar/Topbar'
import Sidebar from  '../../Components/sidebar/Sidebar'
import Feed from '../../Components/feed/Feed'
import RightBar from '../../Components/rightbar/RightBar'

// import Person from '@mui/icons-material/Person'

function Home() {
  return (
    <>
   {/* <Person/> */}
   <Topbar/>
   <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <RightBar/>
   </div>
   </>
  )
}

export default Home