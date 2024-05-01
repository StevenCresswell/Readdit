import React from "react";
import { changeSubreddit } from "../NewsFeed/newsFeedSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const navigate = useNavigate()
    const {title, score, author, subreddit, url, post_hint, selftext} = post.data
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
    } else if (url.endsWith(".jpeg") || url.endsWith(".jpg") || url.endsWith(".png" || url.endsWith(".gif"))) {
        imageUrl = url
        thumbnail = ""
    } else thumbnail = "";
    const blurb = selftext.substring(0, 300)

    const dispatch = useDispatch()
    const handleSubredditClick = () => {
        dispatch(changeSubreddit(subreddit))
        navigate('/')
    }
    const handleVideoRedirect = () => {
        window.open(videoRedirect, "_blank", "noreferrer")
    }
    const handleLinkClick = () => {
        window.open(url, "_blank", "noreferrer")
    }
    
    return (
        <div className="postContainer">
            <h3 className="postTitle">{title}</h3>
            {imageUrl && <img src={imageUrl} style={{width: 200, height: 200}}className="postImage" />}
            {thumbnail && <img src={thumbnail} style={{width: 200, height: 200}}className="postImage" />}
            {videoUrl && 
            <div className="videoDiv">
                <video className="postVideo"controls>
                    <source src={videoUrl}/>
                </video>
                <p className="videoRedirectLink" onClick={handleVideoRedirect}>Click here to view the video with sound on reddit</p>
            </div>}
            {post_hint === "link" && <p onClick={handleLinkClick}>{url}</p>}
            {selftext && <p className="blurb">{`${blurb}...`}</p>}
            <p className="postScore">{score}</p>
            <p className="postAuthor">{author}</p>
            <p className="postSubreddit" onClick={handleSubredditClick}>{`r/${subreddit}`}</p>
        </div>
    )
}

export default Post