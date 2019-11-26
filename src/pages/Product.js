//react page for displaying Product/Order features of web service
import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.setState(state => ({
    //         isToggleOn: !state.isToggleOn
    //     }));
    // }

    handleClick() {
        alert('Click!');
    }

    //don't forget about ship product and shipping status at the end (buttons)
    //should shipping status just display info right below it in a text field?

    //should I have different functions for each click event since
    //they are for different actions resulting from different buttons?
    render() {
        return (
            <div>
                <h1>Ecommerce</h1>
                <h2>Product Page</h2>
                {/* <div>Text Input Field For Product Name</div> */}
                <input type="text" name="Product Name" />
                <button onClick={this.handleClick}>
                    Search Product
                </button>
                <div>Table for results of product search (name, quantity, review)</div>
                <button onClick={this.handleClick}>
                    Purchase Product
                </button>
                <button onClick={this.handleClick}>
                    Ship Product
                </button>
                <button onClick={this.handleClick}>
                    Shipping Status
                </button>
                <div>Info from Shipping Status displayed here</div>
            </div>
        );
    }
}

export default Product;