import { configureStore } from "@reduxjs/toolkit";
import newsFeedReducer from "../Components/NewsFeed/newsFeedSlice"
import searchBarReducer from "../Components/SearchBar/searchBarSlice"
import favoritesReducer from "../Components/Favorites/favoritesSlice"

export default configureStore({
    reducer: {
        newsFeed: newsFeedReducer,
        searchBar: searchBarReducer,
        favorites: favoritesReducer,
    },
})