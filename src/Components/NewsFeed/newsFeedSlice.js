import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadNewsFeed = createAsyncThunk(
    'newsFeed/loadNewsFeed',
    async (subreddit) => {
        const response = await fetch(`https://www.reddit.com/${subreddit}.json`)
        const json = await response.json();
        return json.data.children;
    }
)

export const newsFeedSlice = createSlice({
    name: 'newsFeed',
    initialState: {
        newsFeedData: [],
        currentSubreddit: 'r/popular',
        isLoadingData: false,
        failedLoadData: false,
    },
    reducers: {
        changeSubreddit: (state, action) => {
            state.currentSubreddit = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadNewsFeed.pending, (state) => {
                state.isLoadingData = true;
                state.failedLoadData = false;
            })
            .addCase(loadNewsFeed.fulfilled, (state, action) => {
                state.newsFeedData = action.payload;
                state.isLoadingData = false;
                state.failedLoadData = false;
            })
            .addCase(loadNewsFeed.rejected, (state) => {
                state.isLoadingData = false;
                state.failedLoadData = true;
            });
    }
});

export const selectData = (state) => state.newsFeed.newsFeedData;
export const selectSubreddit = (state) => state.newsFeed.currentSubreddit;
export const isLoadingData = (state) => state.newsFeed.isLoadingData;
export const failedLoadData = (state) => state.newsFeed.failedLoadData;
export const { changeSubreddit } = newsFeedSlice.actions;
export default newsFeedSlice.reducer