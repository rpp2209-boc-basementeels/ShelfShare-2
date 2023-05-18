import React from 'react';
import Review from './Review.jsx';
import Container from 'react-bootstrap/Container'

const ReviewList = (props) => {

    var reviews = props.reviews.map((review, index) => {
        return (
            <Review review={review} key={index}/>
        )
    });

    // if (props.reviews.length === 0) {
    //     gallery = <div> Sorry, No Reviews</div>
    //   }

    // console.log('empty reviews', props.reviews)
    return (
        <Container style={{"display": "flex", "justifyContent": "center"}}>
            {reviews}
        </Container>
    )
};

export default ReviewList;