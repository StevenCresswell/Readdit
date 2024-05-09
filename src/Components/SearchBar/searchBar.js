import React from "react";
import './searchBar.css'
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, makeQuery, selectSearchTerm, setPreviousSearchTerm } from "./searchBarSlice";
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
        dispatch(setPreviousSearchTerm(searchTerm))
        navigate('/search-results')
        dispatch(changeSearchTerm(''))
        }
    }

    return (
        <form id="searchBar">
            <input type="search" id="query" name="q" placeholder="Search Reddit" onChange={handleChange} value={searchTerm}/>
            <button type="submit" id="submit" onClick={handleSubmit}>Search</button>
        </form>
    )
}

export default SearchBar