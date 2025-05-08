import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from '@mui/icons-material'
import './Sidebar.css'
import { Users } from '../../Dummy';
import CloseFriend from '../CloseFriend/CloseFriend';

function Sidebar() {
  return (
   <>
   <div className="sidebar">
    <div className="sidebarWrapper">
      <ul className='sidebarList'>
        <li className='sidebarListItem'>
          <RssFeed/>
          <span className='sidebarListItemText'>Feed</span>
        </li>
        <li className='sidebarListItem'>
          <Chat/>
          <span className='sidebarListItemText'>Chat</span>
        </li>
        <li className='sidebarListItem'>
          <PlayCircleFilledOutlined/>
          <span className='sidebarListItemText'>Video</span>
        </li>
        <li className='sidebarListItem'>
          <Group/>
          <span className='sidebarListItemText'>Groups</span>
        </li>
        <li className='sidebarListItem'>
          <Bookmark/>
          <span className='sidebarListItemText'>Bookmark</span>
        </li>
        <li className='sidebarListItem'>
          <HelpOutline/>
          <span className='sidebarListItemText'>Questions</span>
        </li>
        <li className='sidebarListItem'>
          <WorkOutline/>
          <span className='sidebarListItemText'>Jobs</span>
        </li>
        <li className='sidebarListItem'>
          <Event/>
          <span className='sidebarListItemText'>Events</span>
        </li>
        <li className='sidebarListItem'>
          <School/>
          <span className='sidebarListItemText'>courses</span>
        </li>
      </ul>
      <button className="sidebarButton">SHOW MORE</button>
      <hr className="sidebarHr" />
      <ul className="sidebarFriendList">
       {Users.map((user)=>(
        <CloseFriend key={user.id} user={user}/>
       ))}
      </ul>
    </div>
   </div>
   </>
  )
}

export default Sidebar