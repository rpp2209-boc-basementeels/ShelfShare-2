import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

const EditInfoModal = (props) => {
    // need to implement uploading photo file from local computer
    return (
        <div style={{"width": "45vw"}}>
            <h3 style={{"textAlign": "center"}}>Edit Personal Information</h3>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control defaultValue={props.info.first_name}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control defaultValue={props.info.last_name}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label style={{"marginTop": "2vh"}}>Username</Form.Label>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control defaultValue={props.info.username}></Form.Control>
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{"marginTop": "2vh"}}>Email Address</Form.Label>
                    <Form.Control defaultValue={props.info.email}></Form.Control>
                    <Form.Text>We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label style={{"marginTop": "2vh"}}>Age</Form.Label>
                            <Form.Control defaultValue={props.info.age}></Form.Control>
                            <Form.Text>We'll never share your age with anyone else.</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label style={{"marginTop": "2vh"}}>Gender</Form.Label>
                            <Form.Select>
                                <option>Select your gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="4">Other</option>
                                <option value="3">Undisclosed</option>
                            </Form.Select>
                            <Form.Text>We'll never share your gender with anyone else.</Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <h3 style={{"textAlign": "center", "marginTop": "2vh"}}>Edit Address</h3>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control type="input"></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control type="input"></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row style={{"marginTop": "2vh"}}>
                    <Col>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control type="input"></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>State</Form.Label>
                            <Form.Control type="input"></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row style={{"marginTop": "2vh"}}>
                    <Col>
                        <Form.Group>
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control type="input"></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Country</Form.Label>
                            <Form.Control defaultValue="United States"></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Text>We'll never share your address with anyone else.</Form.Text>
            </Form>
            <Button style={{"marginTop": "2vh", "marginBottom": "5vh"}} variant="outline-primary" onClick={() => {props.closeButton(!props.buttonClicked); alert('Your information has been saved!')}}>Save My Information</Button>
        </div>
    )
};

export default EditInfoModal;
