import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import './App.css';
import MyComponent from './components/MyComponent.js'
import Search from './components/Search.js'

var searchText = ""
var searchType = 0

function callback(text, type) {
  searchText = text;
  searchType = type;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ecommerce</h1>
        <div className="Search-box">
          <Search callback={callback()}/>
        </div>  
        <MyComponent searchType={searchType} searchText={searchText}/>
      </header>
    </div>
  );
}

export default App;
