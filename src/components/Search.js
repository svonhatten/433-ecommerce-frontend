//https://reactjs.org/docs/faq-ajax.html

import React from 'react';

export default class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchText: '',
        selectedOption: "product"
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleOptionChange = this.handleOptionChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      this.setState({searchText: event.target.value});
    }

    handleOptionChange(event){
      this.setState({selectedOption: event.target.value});
    };
  
    handleSubmit(event) {
      event.preventDefault();
      console.log('Search: ' + this.state.searchText + ' Type: ' + this.state.selectedOption);
      this.props.callback(this.state.searchText, this.state.selectedOption)
    }

    render() {
      return(
        <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Search:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
            <form className="Radio-buttons">
            {/* Customer option */}
            <div>
                <label>
                <input 
                    type="radio"
                    name="service-options"
                    value="customer"
                    checked={this.state.selectedOption === "customer"}
                    onChange={this.handleOptionChange}
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
                    checked={this.state.selectedOption === "order"}
                    onChange={this.handleOptionChange}
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
                    checked={this.state.selectedOption === "product"}
                    onChange={this.handleOptionChange}
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
                    checked={this.state.selectedOption === "partner"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                />
                Partner
                </label>
            </div>
            </form>
        </div>
      )
    }
  }