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