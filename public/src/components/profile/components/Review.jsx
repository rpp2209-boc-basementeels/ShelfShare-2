import React from 'react';
import Card from 'react-bootstrap/Card';

const Review = (props) => {
    // will want props to contain the following data:
    // review body, book title, review date, image url, username
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={props.review.image}></Card.Img>
                <Card.Title>{props.review.title}</Card.Title>
                <Card.Subtitle>{props.review.username}</Card.Subtitle>
                <Card.Subtitle>{props.review.date}</Card.Subtitle>
                <Card.Body>{props.review.body}</Card.Body>
            </Card>
        </div>
    )
};

export default Review;