import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import EditInfoModal from './EditInfoModal.jsx';

const Information = (props) => {

    const [editButtonClicked, setEditButtonClicked] = useState(false);


    return (
        <div>
            {editButtonClicked ? <div style={{"display": "flex", "justifyContent": "center"}}>
                <EditInfoModal info={props.info} closeButton={setEditButtonClicked} buttonClicked={editButtonClicked}/>
            </div> : <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "center"}}>
            <div style={{"textAlign": "center", "position": "relative", "width": "30vw", "minWidth": "max-content"}}>
                <Image style={{"borderRadius": "50%", "width": "10vw"}} src={props.info[0].photo}></Image>
                <h4 style={{"marginTop": "2vh", "marginBottom": "0vh", "font-family": "Helvetica"}}>{props.info[0].first_name + " " + props.info[0].last_name}</h4>
                <h6 style={{"font-family": "Helvetica"}}>@{props.info[0].username}</h6>
                <hr></hr>
                <h3 style={{"marginTop": "5vh", "marginBottom": "5vh", "font-family": "Helvetica"}}>My Personal Information</h3>
                <h6 style={{"color": "GrayText", "font-family": "Helvetica"}}>Email Address: {props.info[0].email}</h6>
                <h6 style={{"color": "GrayText", "font-family": "Helvetica"}}>Age: {props.info[0].age}</h6>
                <h6 style={{"color": "GrayText", "font-family": "Helvetica"}}>Gender: {props.info[0].gender}</h6>
                <h6 style={{"color": "GrayText", "font-family": "Helvetica", "marginBottom": "5vh"}}>Address: 124 Conch St., Bikini Bottom, Earth 12345</h6>
                <Button style={{"position": "absolute", "top": 0, "right": 0}} variant="outline-primary" onClick={() => {setEditButtonClicked(!editButtonClicked)}}>Edit</Button>
            </div>
            </div>}
        </div>
        
    )
};

export default Information;