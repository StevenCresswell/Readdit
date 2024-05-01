import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const makeQuery = createAsyncThunk(
    'searchBar/makeQuery',
    async (searchTerm) => {
        const uri = encodeURIComponent(searchTerm)
        const response = await fetch(`https://www.reddit.com/search.json?q=${uri}`)
        const json = await response.json();
        return json.data.children;
    }
)

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState: {
        searchData: [],
        searchTerm: '',
        isSearching: false,
        failedSearch: false,
    },
    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(makeQuery.pending, (state) => {
                state.isSearching = true;
                state.failedSearch = false;
            })
            .addCase(makeQuery.fulfilled, (state, action) => {
                state.searchData = action.payload;
                state.isSearching = false;
                state.failedSearch = false;
            })
            .addCase(makeQuery.rejected, (state) => {
                state.isSearching = false;
                state.failedSearch = true;
            });
    }
})

export const isSearching = (state) => state.searchBar.isSearching
export const failedSearch = (state) => state.searchBar.failedSearch
export const selectSearchData = (state) => state.searchBar.searchData
export const selectSearchTerm = (state) => state.searchBar.searchTerm
export const {changeSearchTerm} = searchBarSlice.actions
export default searchBarSlice.reducer