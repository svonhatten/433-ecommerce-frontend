//https://reactjs.org/docs/faq-ajax.html

import React from 'react';

const API_ENDPOINTS = [
  "userdata/users/",
  "order/orders/",
  "product/products/",
  "partner/partners/"
]

export default class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
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

    getData(){
      // let searchString = ("http://localhost:8080/services/product/products/"+this.state.value)
      let searchString = ("http://localhost:8080/services/")
      if(this.props.searchType >= 0 && this.props.searchType < 4 && this.props.searchText != null){
        searchString = searchString + API_ENDPOINTS[this.props.searchType] + this.props.searchText
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
            this.setState({data: result.body, isLoaded: true})
            console.log("result")
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
            console.log("error")
          }
        )
    }

    getLinkButtons(){
      if(this.state.data != null){
        let links = this.state.data.links
        let i = 0;
        let array = []
        for(i = 0; i < links.length; i++){
          array.push(
          <form action={links[i].url} key={i}>
              <input type="submit" value={links[i].action} />
          </form>
          )
        }
        return array
      }
      else {
        return ""
      }
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('new value: ' + this.state.value);
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
          <div align="left">
            <pre>
              {JSON.stringify(this.state.data, null, 2)}
            </pre>
            {this.getLinkButtons()}
          </div>
        );
      }
    }
  }