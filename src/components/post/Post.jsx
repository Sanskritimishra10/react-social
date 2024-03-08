import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const[islike,issetLike]=useState(false);
  const handleLike = () => {
    // Increase like count by 1 when the like button is clicked
    setLike(islike?like-1:like+1);
    issetLike(!islike);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
            <span className="postUsername">Safak Kocaoglu</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {/* Attach handleLike function to onClick event */}
            <img className="likeIcon" src="/assets/like.png" alt="" onClick={handleLike} />
            <img className="likeIcon" src="/assets/heart.png" alt="" onClick={handleLike}/>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}