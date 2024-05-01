import { configureStore } from "@reduxjs/toolkit";
import newsFeedReducer from "../Components/NewsFeed/newsFeedSlice"
import searchBarReducer from "../Components/SearchBar/searchBarSlice"

export default configureStore({
    reducer: {
        newsFeed: newsFeedReducer,
        searchBar: searchBarReducer,
    },
})