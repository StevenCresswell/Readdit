import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, makeQuery, selectSearchTerm } from "./searchBarSlice";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const searchTerm = useSelector(selectSearchTerm)
    const handleChange = (e) => {
        dispatch(changeSearchTerm(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchTerm) {
        dispatch(makeQuery(searchTerm))
        }
        navigate('/search-results')
    }

    return (
        <form id="searchBar">
            <input type="search" id="query" name="q" placeholder="Search Reddit" onChange={handleChange} value={searchTerm}/>
            <button type="submit" onClick={handleSubmit}>Search</button>
        </form>
    )
}

export default SearchBar