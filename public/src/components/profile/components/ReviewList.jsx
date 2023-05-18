import React from 'react';
import Review from './Review.jsx';
import Container from 'react-bootstrap/Container'

const ReviewList = (props) => {

    var reviews = props.reviews.map((review, index) => {
        return (
            <Review onModal={props.onModal} usernameThatWasClicked={props.usernameThatWasClicked} setUsernameThatWasClicked={props.setUsernameThatWasClicked} review={review} key={index}/>
        )
    });

    return (
        <Container style={{"display": "flex", "justifyContent": "center"}}>
            {props.onModal && props.reviews.length === 0 ? <h4 style={{"marginTop": "3vh"}}>This book doesn't have any reviews yet</h4> : <div>{reviews}</div>}
        </Container>
    )
};

export default ReviewList;