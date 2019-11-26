//react page for displaying CancelOrder features of web service
import React from 'react';

class CancelOrder extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert('Click!');
    }

    render() {

        //track state of button (onClick); cancels order
        //simply have it provide a message saying that the order has been canceled
        return (
            <div>
                <h1>Ecommerce</h1>
                <h2>Cancel Order Page</h2>
                <h3>Want to Cancel Your Order?</h3>
                <button onClick={this.handleClick}>
                    Cancel Order
                </button>
            </div>
        );
    }
}

export default CancelOrder;