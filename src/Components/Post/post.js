import React from "react";
import { changeSubreddit } from "../NewsFeed/newsFeedSlice";
import { useDispatch } from "react-redux";

const Post = ({post}) => {
    const {title, score, thumbnail, author, subreddit} = post.data
    let video = ''
    const dispatch = useDispatch()
    const handleClick = (e) => {
        dispatch(changeSubreddit(e.target.value))
    }
    
    return (
        <div className="postContainer">
            <h3 className="postTitle">{title}</h3>
            {thumbnail==="self" ? '' : <img src={thumbnail} className="postImage" />}
            {video && <video controls>
                <source src={video}/>
            </video>}
            <p className="postScore">{score}</p>
            <p className="postAuthor">{author}</p>
            <p className="postSubreddit" value="subreddit" onClick={handleClick}>{`r/${subreddit}`}</p>
        </div>
    )
}

export default Post