import React from "react";
import { isSearching, failedSearch, selectSearchData, selectSearchTerm } from "./searchBarSlice";
import { useSelector } from "react-redux";
import Post from "../Post/post";

const SearchResults = () => {
    const searching = useSelector(isSearching)
    const searchFailed = useSelector(failedSearch)
    const currentSearchTerm = useSelector(selectSearchTerm)
    const searchResults = useSelector(selectSearchData)

    if (searching) return <div>Searching for results...</div>
    if (searchFailed) return <div>Failed to Load Search Results. This may be due to the rate limitations of the free API. See <a href="https://www.reddit.com/r/reddit/comments/145bram/addressing_the_community_about_changes_to_our_api/">this link</a> for further info and try again later.</div>

    return (
        <div className="searchResultsContainer">
            <h2>{`Showing search results for "${currentSearchTerm}"`}</h2>
            {searchResults.map((result) => (
                <Post post={result} />
    ))}
        </div>
    )
}

export default SearchResults