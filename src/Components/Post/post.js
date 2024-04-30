import React from "react";
import { changeSubreddit } from "../NewsFeed/newsFeedSlice";
import { useDispatch } from "react-redux";

const Post = ({post}) => {
    const {title, score, author, subreddit, url} = post.data
    const videoData = post.data.media?.reddit_video
    let videoUrl
    let videoRedirect
    if (videoData) {
        videoUrl = videoData.fallback_url
        videoRedirect = post.data.url_overridden_by_dest
    }
    let {thumbnail} = post.data
    let imageUrl
    if (thumbnail === "nsfw") {
        thumbnail = "https://img.freepik.com/premium-vector/nsfw-neon-sign-safe-work-censorship-vector-stock-illustration_100456-8373.jpg";
    } else if (url.endsWith(".jpeg") || url.endsWith(".jpg") || url.endsWith(".png")) {
        imageUrl = url
        thumbnail = ""
    } else thumbnail = "";
    
    
    
    const dispatch = useDispatch()
    const handleSubredditClick = () => {
        dispatch(changeSubreddit(subreddit))
    }
    const handleVideoRedirect = () => {
        window.open(videoRedirect, "_blank", "noreferrer")
    }
    
    return (
        <div className="postContainer">
            <h3 className="postTitle">{title}</h3>
            {imageUrl ? <img src={imageUrl} style={{width: 200, height: 200}}className="postImage" /> : ''}
            {thumbnail && <img src={thumbnail} style={{width: 200, height: 200}}className="postImage" />}
            {videoUrl && 
            <div className="videoDiv">
                <video controls>
                    <source src={videoUrl}/>
                </video>
                <p onClick={handleVideoRedirect}>Click here to view the video with sound on reddit</p>
            </div>}
            <p className="postScore">{score}</p>
            <p className="postAuthor">{author}</p>
            <p className="postSubreddit" onClick={handleSubredditClick}>{`r/${subreddit}`}</p>
        </div>
    )
}

export default Post