import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
    render() {
        const selectedRentals = this.props.rentals
            .map((rental, index) => {
                const rentalTitle = rental.title;
                const rentalCost = rental.payment.cost;

                return (
                    <li className="CartRental" key={index}>
                        <span className="CartTitle">{rentalTitle}</span>
                        <span className="CartCost">${rentalCost}</span>
                        <button onClick={() => this.props.onDeleteRental(index)}>Delete</button>
                    </li>
                );
            });

        const cartTotal = this.props.cartTotal;

        return (
            <div id="Cart">
                <h2>Your Cart</h2>
                <ul>
                    {selectedRentals}
                </ul>

                <h3>Your Total</h3>
                <p>${cartTotal}</p>
            </div>
        );
    }
}

Cart.propTypes = {
    rentalCost: PropTypes.number,
    rentalTitle: PropTypes.string,
    cartTotal: PropTypes.number
}

export default Cart;