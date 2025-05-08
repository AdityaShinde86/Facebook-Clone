import './Profile.css'
import Topbar from '../../Components/topbar/Topbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Rightbar from '../../Components/rightbar/RightBar'
import Feed from '../../Components/feed/Feed'

function Profile() {
  return (
  <>
<Topbar/>
<div className='profile'>
  <Sidebar/>
  <div className="profileRight">
    <div className="profileRightTop">
      <div className="profileCover">
        <img src="src/assets/post/10.jpg" alt="" className='profileCoverImg'/>
        <img src="src/assets/person/1.jpg" alt="" className='profileUserImg'/>
      </div>
        <div className="profileInfo">
          <h4 className="profileInfoName">Mine</h4>
          <span className="profileInfoDesc">Hellow my Friends</span>
        </div>
    </div>
    <div className="profileRightBottom">
      {/* <Feed/> */}
      <Feed/>
      <Rightbar profile/>
    </div>
  </div>
</div>
  </>
  )
}

export default Profile