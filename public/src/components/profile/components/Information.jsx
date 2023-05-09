import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import EditInfoModal from './EditInfoModal.jsx';

const Information = (props) => {

    const [editButtonClicked, setEditButtonClicked] = useState(false);


    return (
        <div>
            {editButtonClicked ? <EditInfoModal closeButton={setEditButtonClicked} buttonClicked={editButtonClicked}/> : <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "center"}}>
            <div style={{"textAlign": "center", "position": "relative", "width": "30vw", "minWidth": "max-content"}}>
                <img style={{"borderRadius": "50%"}} src={props.info[0].photo}></img>
                <h4>{props.info[0].first_name + " " + props.info[0].last_name}</h4>
                <h6>{props.info[0].email}</h6>
                <h6>Age: {props.info[0].age}</h6>
                <h6>Gender: {props.info[0].gender}</h6>
                <h6>124 Conch St., Bikini Bottom, Earth 12345</h6>
                <Button style={{"position": "absolute", "top": 0, "right": 0}} variant="outline-primary" onClick={() => {setEditButtonClicked(!editButtonClicked)}}>Edit</Button>
            </div>
            </div>}
        </div>
        
    )
};

export default Information;