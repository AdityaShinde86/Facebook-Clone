import './Rightbar.css'
import { Users } from '../../Dummy';
import OnlineFriend from '../onlineFriend/OnlineFriend';
function Rightbar({profile}) {
  let HomeRightbar = () =>{
    return (
      <>
      <div className="birthdayContainer">
        <img src="src\assets\gift.png" alt="" className='birthdayImg'/>
        <span className="birthdayText">
          <b>mine and</b> and <b>5 other friends</b> have a birthday today.
        </span>
      </div>
      <img src="src\assets\person\3.jpg" alt="" className='rightbarAd'/>
      <h4 className='rightbarTitle'>Onilne Friends</h4>
      <ul className="rightbarFriendList">
      {Users.map((user)=>(
        <OnlineFriend key={user.id} user={user}/>
      ))}
      </ul>
      </>
    )
  }
  let ProfileRightbar =() =>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">City:</span>
          <span className="rightbarInfoValue">Pune</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">From:</span>
          <span className="rightbarInfoValue">ABC</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">RelationShip:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="src/assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mike</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">ABC</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">PQR</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">XYZ</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mine</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/person/6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jhon</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
    <div className="rightbar">
    <div className="rightbarWrapper">
      {profile ? <ProfileRightbar/> : <HomeRightbar/>}
    </div>
    </div>
    </>
  )
}

export default Rightbar