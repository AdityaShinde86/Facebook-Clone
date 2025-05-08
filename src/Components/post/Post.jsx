import './Post.css'
import {MoreVert } from '@mui/icons-material'
import { Users } from '../../Dummy';
import { useState } from 'react';

function Post({post}) {
let [like,setLike]=useState(post.like)
let [islike,setIslike]=useState(false)
let likeHandler=()=>{
  setLike(islike?like-1:like+1)
  setIslike(!islike)
}
  return (
    <>
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((user)=>user.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
             {Users.filter((user)=>user.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="src\assets\like.png"  alt=""  onClick={likeHandler}/>
            <img className="likeIcon" src="src\assets\heart.png" alt=""  onClick={likeHandler}/>
            <span className="postLikeCounter" >{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Post