//react page for displaying Customer features of web service
import React from 'react';

class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert('Click!');
    }

    render() {

    //track state of button (onClick); adds customer to database,
    //response is the link for customer, and the data for customer id, etc.

        return (
            <div>
                <h1>Ecommerce</h1>
                <h2>Customer Page</h2>
                <button onClick={this.handleClick}>
                    Add Customer
                </button>
                <div>
                    <div>This is where the customer id will be displayed</div>
                </div>
                <button onClick={this.handleClick}>
                    Find Customer
                </button>
            </div>
        );
    }
}

export default Customer;