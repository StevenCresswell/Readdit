import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadComments = createAsyncThunk(
    'comments/loadComments',
    async (permalink) => {
        const response = await fetch(`https://www.reddit.com${permalink}.json`)
        const json = await response.json();
        return json[1].data.children;
    }
)

export const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        currentPostData: {},
        commentData: [],
        isLoadingComments: false,
        failedLoadComments: false,
    },
    reducers: {
        setCurrentPost: (state, action) => {
            state.currentPostData = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadComments.pending, (state) => {
                state.isLoadingComments = true;
                state.failedLoadComments = false;
            })
            .addCase(loadComments.fulfilled, (state, action) => {
                state.commentData = action.payload;
                state.isLoadingComments = false;
                state.failedLoadComments = false;
            })
            .addCase(loadComments.rejected, (state) => {
                state.isLoadingComments = false;
                state.failedLoadComments = true;
            });
    }
})

export const selectCurrentPost = (state) => state.comments.currentPostData
export const selectCommentData = (state) => state.comments.commentData
export const isLoadingComments = (state) => state.comments.isLoadingComments
export const failedLoadComments = (state) => state.comments.failedLoadComments
export const {setCurrentPost} = commentsSlice.actions
export default commentsSlice.reducer