import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import moment from 'moment';

const Review = (props) => {
    var date = moment(props.review.review_date).local().format('M-D-YYYY');

    return (
        <Card style={{"width": "50rem", "borderWidth": "1px"}}>
            <Row>
                <Card.Img style={{"height": "10rem", "width": "7rem"}} variant="top" src={props.review.image_url}></Card.Img>
                <Col>
                    <Card.Title>{props.review.title}</Card.Title>
                    <Card.Text style={{"cursor": "pointer"}} onClick={() => {
                        if (props.usernameThatWasClicked === '') {
                            props.setUsernameThatWasClicked(props.review.username);
                        }
                    }}>Posted by: @{props.review.username}</Card.Text>
                    <Card.Text style={{"padding": "0"}}>{props.review.body}</Card.Text>
                    <Card.Subtitle style={{"position": "absolute", "top": 0, "right": 0, "paddingTop": "2vh", "paddingRight": "1vw"}}>{date}</Card.Subtitle>
                </Col>
            </Row>
        </Card>
    )
};

export default Review;