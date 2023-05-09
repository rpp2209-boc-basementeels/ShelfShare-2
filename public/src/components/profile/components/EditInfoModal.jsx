import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditInfoModal = (props) => {
    // need to implement uploading photo file from local computer
    return (
        <Form>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control defaultValue={props.info[0].first_name}></Form.Control>
            <Form.Group/>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control defaultValue={props.info[0].last_name}></Form.Control>
            </Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control defaultValue={props.info[0].email}></Form.Control>
                <Form.Text>We'll never share your email with anyone else.</Form.Text>
                <Form.Label>Age</Form.Label>
                <Form.Control defaultValue={props.info[0].age}></Form.Control>
                <Form.Text>We'll never share your age with anyone else.</Form.Text>

            </Form.Group>
            <Button variant="outline-primary" onClick={() => {props.closeButton(!props.buttonClicked)}}>Save My Information</Button>
        </Form>
    )
};

export default EditInfoModal;
