import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import React from 'react';
import NewsFeed from '../Components/NewsFeed/newsFeed';
import SearchResults from '../Components/SearchBar/searchResults';
import Root from '../Components/root';

const appRouter = createBrowserRouter(createRoutesFromElements(<Route path="/" element={ <Root /> }>
    <Route index element={ <NewsFeed />}/>
    <Route path='/search-results' element={ <SearchResults />}/>
  </Route>
  ))


function App() {
  return (
    <RouterProvider router={appRouter}/>
 )
}

export default App;
