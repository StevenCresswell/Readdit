import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadNewsFeed = createAsyncThunk(
    'newsFeed/loadNewsFeed',
    async (subReddit) => {
        const response = await fetch(`https://www.reddit.com/${subReddit}.json`)
        const json = await response.json();
        return json.data.children;
    }
)

export const newsFeedSlice = createSlice({
    name: 'newsFeed',
    initialState: {
        newsFeedData: [],
        isLoadingData: false,
        failedLoadData: false,
    },
    reducers: {},
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

export const selectData = (state) => state.newsFeedData;
export const isLoadingData = (state) => state.isLoadingData;
export const failedLoadData = (state) => state.failedLoadData;

export default newsFeedSlice.reducer