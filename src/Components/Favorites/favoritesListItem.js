import React from "react";
import './favorites.css'
import { removeFavorite } from "./favoritesSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeSubreddit } from "../NewsFeed/newsFeedSlice";

const FavoritesListItem = ({subreddit}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleRemoval = () => {
        dispatch(removeFavorite(subreddit))
    }

    const handleSubredditClick = () => {
        dispatch(changeSubreddit(subreddit))
        navigate('/')
    }

    return(
        <div className="favoritesListItem">
            <button className="removalButton" onClick={handleRemoval}>x</button>
            <li onClick={handleSubredditClick}>{`r/${subreddit}`}</li> 
        </div>
    )
}

export default FavoritesListItem