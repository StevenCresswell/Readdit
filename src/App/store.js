import { configureStore } from "@reduxjs/toolkit";
import newsFeedReducer from "../Components/NewsFeed/newsFeedSlice"
import searchBarReducer from "../Components/SearchBar/searchBarSlice"
import favoritesReducer from "../Components/Favorites/favoritesSlice"
import commentsReducer from "../Components/Comments/commentsSlice"

export default configureStore({
    reducer: {
        newsFeed: newsFeedReducer,
        searchBar: searchBarReducer,
        favorites: favoritesReducer,
        comments: commentsReducer,
    },
})