import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Review = (props) => {
    console.log('props', props);

    return (
        <Container style={{"margin": "1rem"}}>
            {props.onModal ? <Card style={{"width": "50rem", "borderWidth": "1px", "width": "45rem"}}>
            <Row style={{"padding": "1rem"}}>
                <Col>
                    <Card.Text style={{"cursor": "pointer"}} onClick={() => {
                        if (props.usernameThatWasClicked === '') {
                            props.setUsernameThatWasClicked(props.review.username);
                        }
                    }}>@{props.review.username}</Card.Text>
                    <Card.Text style={{"padding": "0"}}>{props.review.body}</Card.Text>
                    <Card.Subtitle style={{"position": "absolute", "top": 0, "right": 0, "paddingTop": "2vh", "paddingRight": "1vw", "minWidth": "max-content"}}>{props.review.review_date}</Card.Subtitle>
                </Col>
            </Row>
        </Card> : <Card style={{"width": "50rem", "borderWidth": "1px"}}>
            <Row style={{"padding": "1rem"}}>
                <Card.Img style={{"height": "10rem", "width": "8rem"}} variant="top" src={props.review.image_url}></Card.Img>
                <Col>
                    <Card.Title>{props.review.title}</Card.Title>
                    <Card.Text style={{"padding": "0"}}>{props.review.body}</Card.Text>
                    <Card.Subtitle style={{"position": "absolute", "top": 0, "right": 0, "paddingTop": "2vh", "paddingRight": "1vw", "minWidth": "max-content"}}>{props.review.review_date}</Card.Subtitle>
                </Col>
            </Row>
        </Card>}
        </Container>
        
    )
};

export default Review;