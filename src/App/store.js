import { configureStore } from "@reduxjs/toolkit";
import newsFeedReducer from "../Components/NewsFeed/newsFeedSlice"

export default configureStore({
    reducer: {
        newsFeed: newsFeedReducer,
    },
})