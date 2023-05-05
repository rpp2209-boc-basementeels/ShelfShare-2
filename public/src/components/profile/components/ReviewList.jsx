import React from 'react';
import Review from './Review.jsx';

const ReviewList = (props) => {

    var reviews = props.reviews.map((review, index) => {
        return (
            <Review review={review} key={index}/>
        )
    })

    return (
        <div style={{"display": "flex", "justify-content": "center"}}>
            {reviews}
        </div>
    )
};

export default ReviewList;