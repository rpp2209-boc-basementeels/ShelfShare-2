import React, { useState, useEffect } from 'react';
import ReviewList from './components/ReviewList.jsx';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Shelf from './components/Shelf.jsx';
import { FcCheckmark } from "react-icons/fc";
import Container from 'react-bootstrap/Container';

const PublicProfilePage = (props) => {
    const [userInfo, setUserInfo] = useState({
        first_name: '',
        last_name: '',
        photo_url: '',
        is_library: false
    });
    const [userReviews, setUserReviews] = useState([]);  

    useEffect(() => {
        axios.get(`/reviews/${props.username}`)
          .then((reviewData) => {
            setUserReviews(reviewData.data);
          })
          .catch((error) => {
            console.log("There was an error while trying to retrieve the user's reviews", error);
          })
          .then(() => {
            return axios.get(`/public/${props.username}`);
          })
          .then((infoData) => {
            setUserInfo(infoData.data[0]);
          })
          .catch((error) => {
            console.log("There was an error while trying to retrieve the user's public personal information", error);
          })
    }, []);

    return (
        <Container>
            <Container style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "center"}}>
                <Container style={{"textAlign": "center", "position": "relative", "width": "30vw", "minWidth": "max-content"}}>
                    <Button style={{"position": "absolute", "top": 0, "left": "-10vw"}} variant="outline-primary" onClick={() => {props.set('')}}>Back</Button>
                    <Image style={{"borderRadius": "50%", "width": "10vw"}} src={userInfo.photo_url}></Image>
                    <h4 style={{"marginTop": "2vh", "marginBottom": "0vh", "fontFamily": "Helvetica"}}>{userInfo.first_name + ' ' + userInfo.last_name}</h4>
                    <h6 style={{"fontFamily": "Helvetica"}}>@{props.username}</h6>
                    {userInfo.is_library ? <Container><FcCheckmark size='4em'/><p>Verified Library</p></Container> : null}
                    <hr></hr>
                </Container>
            </Container>
            <h3 style={{"marginTop": "5vh", "marginBottom": "5vh", "textAlign": "center", "fontFamily": "Helvetica"}}>{userInfo.first_name + "'s"} Reviews</h3>
            <Container>
                {userReviews.length === 0 ? <h6 style={{"textAlign": "center"}}>{userInfo.first_name} hasn't left any reviews yet</h6> : <ReviewList reviews={userReviews}/>}
            </Container>
            <h3 style={{"marginTop": "5vh", "marginBottom": "5vh", "textAlign": "center", "fontFamily": "Helvetica"}}>{userInfo.first_name + "'s"} Shelf</h3>
            <Container style={{"display": "flex", "justifyContent": "center"}}>
                <Shelf libraryOwner={props.username}/>
            </Container>
        </Container>
    )
};

export default PublicProfilePage;