import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const ReviewForm = (props) => {

    const [body, setBody] = useState('');

    const handleSaveReview = () => {
        alert(`Thanks for reviewing ${props.book.title}!`)
        axios.post(`/reviews/${props.book.book_id}`, {
            body: body,
            review_date: new Date(),
            username: props.username,
            book_id: props.book.book_id
        }).then((data) => {
            props.setReviewPosted(!props.reviewPosted);
            props.setShowReviewForm(!props.showReviewForm);
        }).catch((error) => {
            console.log('There was an error updating state in the parent component (Gallery)', error);
        })
    };

    return (
        <Form>
            <Form.Group>
                <Form.Label style={{"fontWeight": "bold"}}>Tell us what you thought about {props.book.title}</Form.Label>
                <Form.Control as="textarea" rows={5} columns={20} onChange={(e) => {setBody(e.target.value)}}></Form.Control>
            </Form.Group>
            <div style={{"width": "100%", "display": "flex", "justifyContent": "center", "marginTop": "1rem", "marginBottom": "1rem"}}>
                <Button variant="primary" style={{"marginRight": "1rem"}} onClick={handleSaveReview}>Post Review</Button>
                <Button variant="secondary" onClick={() => {props.setShowReviewForm(!props.showReviewForm)}}>Close</Button>
            </div>
        </Form>
    )

};

export default ReviewForm;