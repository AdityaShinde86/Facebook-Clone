import './CloseFriend.css'

function CloseFriend({user}) {
  return (
    <>
    <li className="sidbarFriend">
      <img src={user.profilePicture} alt="" className='sidebarFriendImg'/>
      <span className='sidebarFriendName'>{user.username}</span>
    </li>
    </>
  )
}

export default CloseFriend