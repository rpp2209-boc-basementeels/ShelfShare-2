import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Review = (props) => {
    // do not want username to show up on reviews in person's profile, just have section called "Maddie's Reviews"
    return (
        <Card style={{"width": "50vw", "borderWidth": "2px"}}>
            <Row>
                <Card.Img style={{"height": "13vh", "width": "7vw"}} variant="top" src={props.review.image}></Card.Img>
                <Col>
                    <Card.Title>{props.review.title}</Card.Title>
                    <Card.Subtitle>{props.review.date}</Card.Subtitle>
                    <Card.Body style={{"padding": "0"}}>{props.review.body}</Card.Body>
                </Col>
            </Row>
        </Card>
    )
};

export default Review;