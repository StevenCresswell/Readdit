import logo from '../logo.svg';
import './App.css';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import React from 'react';
import NewsFeed from '../Components/NewsFeed/newsFeed';

function App() {
  return (
    <NewsFeed />
 )
}

export default App;
