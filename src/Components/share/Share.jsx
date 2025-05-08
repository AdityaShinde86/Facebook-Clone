import './Share.css'
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
function Share() {
  return (
    <>
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="src\assets\person\1.jpg" alt="" className='shareProfileImg' />
          <input placeholder='What you want to post' className='shareInput' />
        </div>
        <div className="shareHr">
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia htmlColor='green' className='shareIcon'/>
                <label className='shareOptionText'>Phote/Video</label>
              </div>
              <div className="shareOption">
                <Label htmlColor='orange' className='shareIcon'/>
                <label className='shareOptionText'>Tag</label>
              </div>
              <div className="shareOption">
                <Room htmlColor='pink' className='shareIcon'/>
                <label className='shareOptionText'>Location</label>
              </div>
              <div className="shareOption">
                < EmojiEmotions htmlColor='yellow' className='shareIcon'/>
                <label className='shareOptionText'>Feelings</label>
              </div>
            </div>
            <button className='shareButton'>Share</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Share