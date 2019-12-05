import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ecommerce</h1>
        <MyComponent searchID={2}/>
      </header>
    </div>
  );
}

export default App;
