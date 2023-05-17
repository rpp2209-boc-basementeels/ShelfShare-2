import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import EditInfoModal from './EditInfoModal.jsx';
import { FcCheckmark } from "react-icons/fc";
import ListGroup from 'react-bootstrap/ListGroup';

const Information = (props) => {
    const [editButtonClicked, setEditButtonClicked] = useState(false);

    return (
        <div>
            {editButtonClicked ? <div style={{"display": "flex", "justifyContent": "center"}}>
                <EditInfoModal info={props.info} closeButton={setEditButtonClicked} buttonClicked={editButtonClicked} setUser={props.setUser}/>
            </div> : <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "center"}}>
            <div style={{"textAlign": "center", "position": "relative", "width": "30vw", "minWidth": "max-content"}}>
                <Image style={{"borderRadius": "50%", "width": "10rem"}} referrerPolicy="no-referrer" src={props.info.photo}></Image>
                <h4 style={{"marginTop": "2vh", "marginBottom": "0vh", "fontFamily": "Helvetica"}}>{props.info.first_name + " " + props.info.last_name}</h4>
                <h6 style={{"fontFamily": "Helvetica"}}>@{props.info.username}</h6>
                {props.isLibrary ? <div><FcCheckmark size='4em'/><p>Verified Library</p></div> : null}
                <hr></hr>
                <h3 style={{"marginTop": "5vh", "marginBottom": "5vh", "fontFamily": "Helvetica"}}>My Personal Information</h3>
                <ListGroup>
                    <ListGroup.Item>Email Address: {props.info.email}</ListGroup.Item>
                    <ListGroup.Item>Age: {props.info.age}</ListGroup.Item>
                    <ListGroup.Item>Gender: {props.info.gender}</ListGroup.Item>
                    {props.info.line_2 ? <ListGroup.Item style={{"marginBottom": "5vh"}}>Address: {props.info.line_1 + ' ' + props.info.line_2 + ' ' + props.info.city + ', ' + props.info.state + ' ' + props.info.postal + ', ' + props.info.country}</ListGroup.Item> :
                    <ListGroup.Item style={{"marginBottom": "5vh"}}>Address: {props.info.line_1 + ' ' + props.info.city + ', ' + props.info.state + ' ' + props.info.postal + ', ' + props.info.country}</ListGroup.Item>}
                </ListGroup>
                <Button style={{"position": "absolute", "top": 0, "right": 0}} variant="outline-primary" onClick={() => {setEditButtonClicked(!editButtonClicked)}}>Edit</Button>
            </div>
            </div>}
        </div>
        
    )
};

export default Information;