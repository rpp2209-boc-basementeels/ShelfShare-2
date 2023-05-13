import React, { useEffect, useState } from 'react';
import Information from './components/Information.jsx';
import ReviewList from './components/ReviewList.jsx';
import axios from 'axios';

const ProfilePage = (props) => {
    // props.user is the data about the current user passed down from App.jsx

    const [userReviews, setUserReviews] = useState([]);
    const [userInfo, setUserInfo] = useState({
        address: '',
        age: '',
        email: '',
        first_name: '',
        last_name: '',
        gender: '',
        is_library: false,
        photo_url: ''});

    useEffect(() => {
        // Below will work when authentication works
        axios.get(`/reviews/${props.user.username}`)
          .then((reviewData) => {
            setUserReviews(reviewData.data);
          })
          .catch((error) => {
            console.log("There was an error while trying to retrieve the user's reviews", error);
          })
          .then(() => {
            return axios.get('/personalInformation/maddiesime');
          })
          .then((infoData) => {
            setUserInfo(infoData.data[0]);
          })
          .catch((error) => {
            console.log("There was an error while trying to retrieve the user's personal information", error);
          })
    }, []);

    return (
        <div>
            <Information info={userInfo}/>
            <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "center"}}>
                <div style={{"textAlign": "center", "position": "relative", "width": "30vw", "minWidth": "max-content"}}>
                    <hr></hr>
                </div>
            </div>
            <h3 style={{"marginTop": "5vh", "marginBottom": "5vh", "textAlign": "center", "fontFamily": "Helvetica"}}>My Reviews</h3>
            <div>
                <ReviewList reviews={userReviews}/>
            </div>
        </div>
    )
};

export default ProfilePage;