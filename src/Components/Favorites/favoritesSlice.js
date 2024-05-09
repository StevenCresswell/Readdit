import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favoritesList: [],
        isDisplayed: true,
    },
    reducers: {
        addFavorite: (state, action) => {
            if (state.favoritesList.includes(action.payload) === false){
            state.favoritesList.push(action.payload)}
        },
        removeFavorite: (state, action) => {
            const subreddit = action.payload
            state.favoritesList = state.favoritesList.filter((listItem) => listItem !== subreddit)
        },
        toggleDisplay: (state) => {
            if (state.isDisplayed === false) {
                state.isDisplayed = true
            } else state.isDisplayed = false
        }
    }
})

export const selectFavoritesList = (state) => state.favorites.favoritesList
export const favoritesDisplayed = (state) => state.favorites.isDisplayed
export const { addFavorite, removeFavorite, toggleDisplay } = favoritesSlice.actions
export default favoritesSlice.reducer