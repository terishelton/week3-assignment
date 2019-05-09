import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Star from './star.svg';

class Rentals extends Component {
    render() {
        const allRentals = this.props.rentals
            .map((rental, index) => {
                const houseType = rental.houseType;
                const rentalTitle = rental.title;
                const rentalCost = rental.payment.cost;
                const rentalStars = rental.rating.stars;
                const rentalReviews = rental.rating.reviews;

                return (
                    <li className="rental" key={index}>
                        <img src={rental.image} alt={rental.title} className="rentalImage" />
                        <p className="houseType">{houseType}</p>
                        <h3>{rentalTitle}</h3>
                        <p className="price">${rentalCost} per person</p>
                        <p className="rating"><span>{rentalStars}</span> <img src={Star} width="12" alt="star" /> <span>({rentalReviews})</span></p>
                        <button onClick={() => this.props.onAddRental(index)}>Add to Cart</button>
                    </li>
                );
            });

        return (
            <div className="allRentals">
                <h2>Available Rentals</h2>
                <ul id="rentals">
                    {allRentals}
                </ul>
            </div>
        );
    }
}

Rentals.propTypes = {
    allRentals: PropTypes.array,
    houseType: PropTypes.string,
    rentalTitle: PropTypes.string,
    rentalCost: PropTypes.number,
    rentalStars: PropTypes.number,
    rentalReviews: PropTypes.number
}

export default Rentals;