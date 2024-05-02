import React from "react";
import SearchBar from "./SearchBar/searchBar";
import Favorites from "./Favorites/favorites";
import { Outlet } from 'react-router-dom'
import { changeSubreddit } from "./NewsFeed/newsFeedSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import redditLogo from "./reddit-svgrepo-com.svg"

const Root = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(changeSubreddit('popular'))
        navigate('/')
    }

    return (
        <div>
            <div id="banner">
                <h1 onClick={handleClick}>Readdit</h1>
                <img src={redditLogo} alt="reddit logo"/>
                <SearchBar />
            </div>
            <Favorites />
            <Outlet />
        </div>
    )
}

export default Root