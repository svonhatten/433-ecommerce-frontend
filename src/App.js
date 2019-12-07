import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ecommerce</h1>
        <div className="Search-box">
          <MyComponent searchID={2}/>
          {/* Radio Buttons for Search */}
          <form className="Radio-buttons">
            {/* Customer option */}
            <div>
              <label>
                <input 
                  type="radio"
                  name="service-options"
                  value="customer"
                  className="form-check-input"
                />
                Customer
              </label>
            </div>
            {/* Order option */}
            <div>
              <label>
                <input 
                  type="radio"
                  name="service-options"
                  value="order"
                  className="form-check-input"
                />
                Order
              </label>
            </div>
            {/* Product option */}
            <div>
              <label>
                <input 
                  type="radio"
                  name="service-options"
                  value="product"
                  className="form-check-input"
                />
                Product
              </label>
            </div>
            {/* Partner option */}
            <div>
              <label>
                <input 
                  type="radio"
                  name="service-options"
                  value="partner"
                  className="form-check-input"
                />
                Partner
              </label>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
