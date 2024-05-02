import React from "react";
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
        <>
            <li onClick={handleSubredditClick}>{`r/${subreddit}`}</li>
            <button onClick={handleRemoval}>x</button>
        </>
    )
}

export default FavoritesListItem