import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const ReviewForm = (props) => {

    const [body, setBody] = useState('');

    const handleSaveReview = () => {
        props.close(false);
        alert(`Thanks for reviewing ${props.book.title}!`)

        axios.post(`/reviews/${props.book.book_id}`, {
            body,
            review_date: new Date(),
            username: props.username,
            book_id: props.book.book_id,
        }).catch((error) => {
            console.log('There was an error posting the review', error);
        })
    };

    return (
        <Form>
            <Form.Group>
                <Form.Label style={{"fontWeight": "bold"}}>Tell us what you thought about {props.book.title}</Form.Label>
                <Form.Control as="textarea" rows={5} onChange={(e) => {setBody(e.target.value)}}></Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={handleSaveReview}>Post Review</Button>
        </Form>
    )

};

export default ReviewForm;