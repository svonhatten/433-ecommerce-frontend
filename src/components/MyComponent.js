//https://reactjs.org/docs/faq-ajax.html

import React from 'react';

export default class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.state = {
        error: null,
        isLoaded: false,
        data: null,
        value: 1
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    componentDidMount() {
      let searchString = ("http://localhost:8080/services/product/products/"+this.state.value)
      fetch(searchString, {
        headers: {
          "Accept": "application/json"
        }
      })
        .then(res => res.json())
        .then( result => {
            // let idname = data.body.item_id
            this.setState({data: result.body, isLoaded: true})
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

    getData(){
      let searchString = ("http://localhost:8080/services/product/products/"+this.state.value)
      fetch(searchString, {
        headers: {
          "Accept": "application/json"
        }
      })
        .then(res => res.json())
        .then( result => {
            // let idname = data.body.item_id
            this.setState({data: result.body, isLoaded: true})
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

    getLinkButtons(){
      if(this.state.data != null){
        let links = this.state.data.links
        let i = 0;
        let array = []
        for(i = 0; i < links.length; i++){
          array.push(
          <form action={links[i].url}>
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
      console.log('A name was submitted: ' + this.state.value);
      this.getData();
      event.preventDefault();
    }

    render() {
      const { error, isLoaded } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div align="left">
            <form onSubmit={this.handleSubmit}>
              <label>
                Product ID:
                <input type="number" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
            <pre>
              {JSON.stringify(this.state.data, null, 2)}
            </pre>
            {this.getLinkButtons()}
          </div>
        );
      }
    }
  }