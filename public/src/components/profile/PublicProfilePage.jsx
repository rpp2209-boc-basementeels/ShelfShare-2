import React, { useState, useEffect } from 'react';
import ReviewList from './components/ReviewList.jsx';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
// import personal library component from Melodie

const PublicProfilePage = (props) => {
    const [userInfo, setUserInfo] = useState({
        first_name: '',
        last_name: '',
        photo_url: ''
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
            console.log('infoData', infoData);
            setUserInfo(infoData.data[0]);
          })
          .catch((error) => {
            console.log("There was an error while trying to retrieve the user's public personal information", error);
          })
    }, []);

    return (
        <div>
            <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "center"}}>
                <div style={{"textAlign": "center", "position": "relative", "width": "30vw", "minWidth": "max-content"}}>
                    <Button style={{"position": "absolute", "top": 0, "left": "-10vw"}} variant="outline-primary" onClick={() => {props.set('')}}>Back</Button>
                    <Image style={{"borderRadius": "50%", "width": "10vw"}} src={userInfo.photo_url}></Image>
                    <h4 style={{"marginTop": "2vh", "marginBottom": "0vh", "fontFamily": "Helvetica"}}>{userInfo.first_name + ' ' + userInfo.last_name}</h4>
                    <h6 style={{"fontFamily": "Helvetica"}}>@{props.username}</h6>
                    <hr></hr>
                </div>
            </div>
            <h3 style={{"marginTop": "5vh", "marginBottom": "5vh", "textAlign": "center", "fontFamily": "Helvetica"}}>{userInfo.first_name + "'s"} Reviews</h3>
            <div>
                <ReviewList reviews={userReviews}/>
            </div>
            <h3 style={{"marginTop": "5vh", "marginBottom": "5vh", "textAlign": "center", "fontFamily": "Helvetica"}}>{userInfo.first_name + "'s"} Shelf</h3>
        </div>
    )
};

export default PublicProfilePage;