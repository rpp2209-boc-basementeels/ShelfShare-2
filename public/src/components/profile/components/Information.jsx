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
                <Image style={{"borderRadius": "50%", "width": "10vw"}} src={props.info.photo_url}></Image>
                <h4 style={{"marginTop": "2vh", "marginBottom": "0vh", "fontFamily": "Helvetica"}}>{props.info.first_name + " " + props.info.last_name}</h4>
                <h6 style={{"fontFamily": "Helvetica"}}>@{props.info.username}</h6>
                <hr></hr>
                <h3 style={{"marginTop": "5vh", "marginBottom": "5vh", "fontFamily": "Helvetica"}}>My Personal Information</h3>
                <h6 style={{"color": "GrayText", "fontFamily": "Helvetica"}}>Email Address: {props.info.email}</h6>
                <h6 style={{"color": "GrayText", "fontFamily": "Helvetica"}}>Age: {props.info.age}</h6>
                <h6 style={{"color": "GrayText", "fontFamily": "Helvetica"}}>Gender: {props.info.gender}</h6>
                {props.info.line_2 ? <h6 style={{"color": "GrayText", "fontFamily": "Helvetica", "marginBottom": "5vh"}}>Address: {props.info.line_1 + ' ' + props.info.line_2 + ' ' + props.info.city + ', ' + props.info.state + ' ' + props.info.postal + ', ' + props.info.country}</h6> :
                <h6 style={{"color": "GrayText", "fontFamily": "Helvetica", "marginBottom": "5vh"}}>Address: {props.info.line_1 + ' ' + props.info.city + ', ' + props.info.state + ' ' + props.info.postal + ', ' + props.info.country}</h6>}
                <Button style={{"position": "absolute", "top": 0, "right": 0}} variant="outline-primary" onClick={() => {setEditButtonClicked(!editButtonClicked)}}>Edit</Button>
            </div>
            </div>}
        </div>
        
    )
};

export default Information;