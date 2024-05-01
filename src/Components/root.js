import React from "react";
import SearchBar from "./SearchBar/searchBar";
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <div>
            <h1>Readdit</h1>
            <SearchBar />
            <Outlet />
        </div>
    )
}

export default Root