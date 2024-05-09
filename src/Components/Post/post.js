import React from "react";
import './post.css'
import { changeSubreddit } from "../NewsFeed/newsFeedSlice";
import { addFavorite, selectFavoritesList } from "../Favorites/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadComments, setCurrentPost } from "../Comments/commentsSlice";

const Post = ({post}) => {
    const navigate = useNavigate()
    const {title, score, author, subreddit, url, post_hint, selftext, permalink} = post.data
    const videoData = post.data.media?.reddit_video
    const favoritesList = useSelector(selectFavoritesList)
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
    const handleAddition = () => {
        dispatch(addFavorite(subreddit))
    }
    const visitPost = () => {
        dispatch(setCurrentPost(post))
        dispatch(loadComments(permalink))
        navigate('/comments')
    }
    
    return (
        <div className="postContainer">
            <h3 onClick={visitPost} className="postTitle">{title}</h3>
            <div className="contentDiv">
                {imageUrl && <img src={imageUrl} className="postImage" />}
                {thumbnail && <img src={thumbnail} className="postImage" />}
                {videoUrl && 
                <div className="videoDiv">
                    <video className="postVideo"controls>
                        <source src={videoUrl}/>
                    </video>
                    <p className="videoRedirectLink" onClick={handleVideoRedirect}>Click here to view the video with sound on reddit</p>
                </div>}
                <p className="postScore">&uArr;       {score}</p>
            </div>
            {post_hint === "link" && <p onClick={handleLinkClick}>{url}</p>}
            {selftext && <p className="blurb" onClick={visitPost}>{`${blurb}...`}</p>}
            <div className="postFooter">
                {favoritesList.includes(subreddit) ? <p className="added">&#10003;</p> : <button className="addButton" onClick={handleAddition}>+</button>}
                <p className="postSubreddit" onClick={handleSubredditClick}>{`r/${subreddit}`}</p> 
            </div>
            <p className="postAuthor">posted by u/{author}</p>
        </div>
    )
}

export default Post