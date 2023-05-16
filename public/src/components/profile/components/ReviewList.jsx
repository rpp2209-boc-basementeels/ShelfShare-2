import React from 'react';
import Review from './Review.jsx';
import Container from 'react-bootstrap/Container'

const ReviewList = (props) => {

    var reviews = props.reviews.map((review, index) => {
        return (
            <Review review={review} key={index}/>
        )
    });

    return (
        <Container style={{"display": "flex", "justifyContent": "center"}}>
            {reviews}
        </Container>
    )
};

export default ReviewList;