//https://reactjs.org/docs/faq-ajax.html

import React from 'react';
import Table from './Table/Table.js';

const API_ENDPOINTS = [
  "userdata/users/",
  "order/orders/",
  "product/products/",
  "partner/partners/"
]

export default class GetData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        data: null,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    componentDidMount() {
      this.getData()
    }

    componentDidUpdate(prev){
      if (prev.searchText !== this.props.searchText || prev.searchType !== this.props.searchType) {
        this.getData();
      }
    }

    getData(){
      let searchString = ("http://localhost:8080/services/")
      if(this.props.searchType !== "" && this.props.searchText !== ""){
        searchString = searchString + this.getEndpoint() + this.props.searchText
      }
      else { 
        this.setState({isLoaded: true})
        return
      }
      fetch(searchString, {
        headers: {
          "Accept": "application/json"
        }
      })
        .then(res => res.json())
        .then( result => {
            // let idname = data.body.item_id
            this.setState({data: result.body, isLoaded: true, error: null})
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    getEndpoint(){
      let type = this.props.searchType
      if(type === "customer"){ return API_ENDPOINTS[0]}
      else if(type === "order"){ return API_ENDPOINTS[1]}
      else if(type === "product"){ return API_ENDPOINTS[2]}
      else {return API_ENDPOINTS[3]}
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      this.getData();
      event.preventDefault();
    }

    render() {
      const { error, isLoaded, data } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else if (data == null){
        return <div></div>;
      } else {
        return (
          <div align="center">
            {/* <pre>
              {JSON.stringify(this.state.data, null, 2)}
            </pre> */}
            <Table data={this.state.data}/>
          </div>
        );
      }
    }
  }