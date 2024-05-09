import React from "react";
import './favorites.css'
import { useSelector, useDispatch } from "react-redux";
import { selectFavoritesList, favoritesDisplayed, toggleDisplay } from "./favoritesSlice";
import FavoritesListItem from "./favoritesListItem";

const Favorites = () => {
    const dispatch = useDispatch();
    const displayed = useSelector(favoritesDisplayed);
    const favoritesList = useSelector(selectFavoritesList);

    const handleToggle = () => {
        dispatch(toggleDisplay())
    }


    return (
        <div className="favorites">
            {displayed ? <button className="favoritesButton" onClick={handleToggle}>Hide Favorites</button> : <button className="favoritesButton" onClick={handleToggle}>Show Favorites</button>}
            {displayed === true && 
                <ul className="favoritesList">
                    {favoritesList.map((subreddit) => (
                        <FavoritesListItem subreddit={subreddit} />
                    ))}
                </ul>
                }
        </div>
    )
}

export default Favorites