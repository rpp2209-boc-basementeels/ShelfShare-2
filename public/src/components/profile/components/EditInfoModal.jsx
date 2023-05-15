import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

const EditInfoModal = (props) => {
    // need to implement uploading photo file from local computer
    const [firstName, setFirstName] = useState(props.info.first_name);
    const [lastName, setLastName] = useState(props.info.last_name);
    const [email, setEmail] = useState(props.info.email);
    const [age, setAge] = useState(props.info.age);
    const [gender, setGender] = useState(props.info.gender);

    const [line1, setLine1] = useState(props.info.line_1);
    const [line2, setLine2] = useState(props.info.line_2);
    const [city, setCity] = useState(props.info.city);
    const [state, setState] = useState(props.info.state);
    const [postal, setPostal] = useState(props.info.postal);
    const [country, setCountry] = useState(props.info.country);

    const handleSaveInfo = () => {
        if (firstName === '' || lastName === '' || email === '' || age === '' || gender === '' || line1 === '' || city === '' || state === '' || postal === '' || country === '') {
            alert('Please complete each field before saving');
        } else {
            props.closeButton(!props.buttonClicked);
            alert('Your information has been saved!')

            axios.post(`/personalInformation/${props.info.username}`, {
                firstName,
                lastName,
                email,
                age,
                gender,
                line1,
                line2,
                city,
                state,
                postal,
                country
            })
            .catch((error) => {
                console.log('There was an error updating personal information :(', error);
            })
        }
    };

    return (
        <div style={{"width": "45vw"}}>
            <h3 style={{"textAlign": "center"}}>Edit Personal Information</h3>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control defaultValue={firstName} onChange={(e) => {setFirstName(e.target.value)}}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control defaultValue={lastName} onChange={(e) => {setLastName(e.target.value)}}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label style={{"marginTop": "2vh"}}>Email Address</Form.Label>
                    <Form.Control defaultValue={email} onChange={(e) => {setEmail(e.target.value)}}></Form.Control>
                    <Form.Text>We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label style={{"marginTop": "2vh"}}>Age</Form.Label>
                            <Form.Control defaultValue={age} onChange={(e) => {setAge(e.target.value)}}></Form.Control>
                            <Form.Text>We'll never share your age with anyone else.</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label style={{"marginTop": "2vh"}}>Gender</Form.Label>
                            <Form.Select onChange={(e) => {setGender(e.target.value)}}>
                                {gender == 'male' ? <option>Male</option> : null}
                                {gender == 'female' ? <option>Female</option> : null}
                                {gender == 'other' ? <option>Other</option> : null}
                                {gender == 'undisclosed' ? <option>Undisclosed</option> : null}
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                <option value="Undisclosed">Undisclosed</option>
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
                            <Form.Control defaultValue={line1} type="input" onChange={(e) => {setLine1(e.target.value)}}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control defaultValue={line2} type="input" onChange={(e) => {setLine2(e.target.value)}}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row style={{"marginTop": "2vh"}}>
                    <Col>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control defaultValue={city} type="input" onChange={(e) => {setCity(e.target.value)}}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>State</Form.Label>
                            <Form.Control defaultValue={state} type="input" onChange={(e) => {setState(e.target.value)}}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row style={{"marginTop": "2vh"}}>
                    <Col>
                        <Form.Group>
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control defaultValue={postal} type="input" onChange={(e) => {setPostal(e.target.value)}}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Country</Form.Label>
                            <Form.Control defaultValue={country} type="input" onChange={(e) => {setCountry(e.target.value)}}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Text>We'll never share your address with anyone else.</Form.Text>
            </Form>
            <Button style={{"marginTop": "2vh", "marginBottom": "5vh"}} variant="outline-primary" onClick={handleSaveInfo}>Save My Information</Button>
        </div>
    )
};

export default EditInfoModal;
