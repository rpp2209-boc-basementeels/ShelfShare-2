import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Information = (props) => {

    return (
        <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "center"}}>
            <div style={{"textAlign": "center", "position": "relative", "width": "30vw", "minWidth": "max-content"}}>
                <Image roundedCircle src={props.info[0].photo}></Image>
                <h4>{props.info[0].first_name + " " + props.info[0].last_name}</h4>
                <h6>{props.info[0].email}</h6>
                <h6>Age: {props.info[0].age}</h6>
                <h6>Gender: {props.info[0].gender}</h6>
                <h6>124 Conch St., Bikini Bottom, Earth 12345</h6>
                <Button style={{"position": "absolute", "top": 0, "right": 0}} variant="outline-primary">Edit</Button>
            </div>
        </div>
    )
};

export default Information;