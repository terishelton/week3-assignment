import React, { Component } from 'react';
import Rentals from './Rentals';
import Cart from './Cart';
import airbnbs from './airbnbs.json';

class NotAirBnB extends Component {
    state = {
        rentals: airbnbs,
        selectedRentals: [],
        cartTotal: 0
    }
    
    addRental = (index) => {
        const selectedRental = this.state.rentals[index];
        const currentTotal = this.state.cartTotal;
        const rentalCost = selectedRental.payment.cost;
        const newTotal = currentTotal + rentalCost;

        if (this.state.selectedRentals.includes(selectedRental)) {
            alert('You have already selected this rental.');
            return;
        }

        this.setState(prevState => {
            return {
              selectedRentals: [...prevState.selectedRentals, selectedRental],
              cartTotal: newTotal
            };
        });
    }

    
    deleteRental = (index) => {
        const selectedRental = this.state.rentals[index];
        const currentTotal = this.state.cartTotal;
        const rentalCost = selectedRental.payment.cost;
        const newTotal = currentTotal - rentalCost;

        this.setState(prevState => {
            const selectedRentals = [...prevState.selectedRentals];
            selectedRentals.splice(index, 1);
      
            return {
              selectedRentals,
              cartTotal: newTotal
            };
      });
    }

    render() {
        return(
            <div className="NotAirBnB">
                <h1>Not AirBnB</h1>
                <Cart 
                    rentals={this.state.selectedRentals}
                    cartTotal={this.state.cartTotal}
                    onDeleteRental={this.deleteRental}
                />
                <hr />
                <Rentals
                    rentals={this.state.rentals}
                    onAddRental={this.addRental}
                />
            </div>
        );
    }
}

export default NotAirBnB;