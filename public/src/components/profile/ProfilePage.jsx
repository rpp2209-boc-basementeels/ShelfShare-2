import React, { useEffect, useState } from 'react';
import Information from './components/Information.jsx';
import ReviewList from './components/ReviewList.jsx';
import axios from 'axios';

const ProfilePage = (props) => {
    // props.user is the data about the current user passed down from App.jsx

    const [userReviews, setUserReviews] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        // upon loading of profile page, need to get two things:
        // ALL of the user's reviews
        // the user's personal information
        // will replace the two variables with dummy data below

        // fill in the below with props.user.username as param
        axios.get(`/reviews/maddiesime`)
          .then((reviewData) => {
            setUserReviews(reviewData);
          })
          .catch((error) => {
            console.log("There was an error while trying to retrieve the user's reviews", error);
          })
        //   .then(() => {
        //     return axios.get('/personalInformation');
        //   })
        //   .then((infoData) => {
        //     setUserInfo(infoData);
        //   })
        //   .catch((error) => {
        //     console.log("There was an error while trying to retrieve the user's personal information", error);
        //   })
    }, []);

    var exampleReviewData = [{
        body: 'This book was very informative on eels and I would suggest that you read it if you like eels.',
        title: 'The Book of Eels',
        date: 'May 4, 2023',
        image: 'https://static01.nyt.com/images/2020/05/26/books/22EELBOOK/22EELBOOK-superJumbo.jpg?quality=75&auto=webp',
        username: 'iloveeels1234'
    }];

    var exampleProfileData = [{
        "first_name": "Kevin",
        "last_name": "Hoang",
        "photo": "https://lh3.googleusercontent.com/a/AGNmyxbKSB-E9sl8llXqjsc04GfTzVm9fN8CgXHl_mv7=s96-c",
        "email": "knhoangre@gmail.com",
        "gender": "male",
        "age": 100,
        "username": "kevinduh"
    }];

    return (
        <div>
            <Information info={exampleProfileData}/>
            <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "center"}}>
                <div style={{"textAlign": "center", "position": "relative", "width": "30vw", "minWidth": "max-content"}}>
                    <hr></hr>
                </div>
            </div>
            <h3 style={{"marginTop": "5vh", "marginBottom": "5vh", "textAlign": "center", "fontFamily": "Helvetica"}}>My Reviews</h3>
            <div>
                <ReviewList reviews={exampleReviewData}/>
            </div>
        </div>
    )
};

export default ProfilePage;