import React from "react";
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
        <div className="favoritesList">
            <button onClick={handleToggle}>Favorites</button>
            {displayed === true && 
                <ul>
                    {favoritesList.map((subreddit) => (
                        <FavoritesListItem subreddit={subreddit} />
                    ))}
                </ul>
                }
        </div>
    )
}

export default Favorites