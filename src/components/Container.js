//https://reactjs.org/docs/faq-ajax.html

import React from 'react';
import GetData from './GetData.js'
import Search from './Search.js'
import LogIn from './Login/LogIn.js';

export default class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        userID: 0,
        searchText: "",
        searchType: "products",
      };
    }

    componentDidMount(){
      this.postData()
    }

    async postData() {
      //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      const url = 'http://localhost:8080/services/product/products';
      const data = { "products":[{ 
        "item_category":"Electronics",
        "item_price":27.5,
        "item_quantity_available":10,
        "item_name":"New Gadget",
        "item_description": "Electonics item",
        "item_sold_by": "Partner1",
        "item_review":3.5
     }] };

      try {
        const response = await fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const json = await response.json();
        console.log('Success:', JSON.stringify(json));
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    callback = (text, type) => {
        this.setState({ searchText: text, searchType: type });
        console.log("callback run: " + text + type) 
    }

    statusCallback = (bool) => {
      this.setState({ loggedIn: bool });
      console.log("sign in status: " + bool) 
    }

    render() {
      return (
        <div align="center">
          <LogIn status={this.state.loggedIn} callback={this.statusCallback}/>
          <h1>Ecommerce</h1>
          <div className="Search-box">
            <Search callback={this.callback}/>
          </div>  
          <GetData searchType={this.state.searchType} searchText={this.state.searchText}/>
        </div>
      );
    }
  }