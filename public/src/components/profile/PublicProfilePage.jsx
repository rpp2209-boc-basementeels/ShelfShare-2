import React, { useState, useEffect } from 'react';
import ReviewList from './components/ReviewList.jsx';
import axios from 'axios';
// import personal library component from Melodie

// need information, reviews, personal library
// since information is limited, don't need to create a new "information" component, just add it here
// props here is the username that was clicked so render info based on that

const PublicProfilePage = (props) => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get(`/publicPersonalInformation/${props.username}`)
          .then((data) => {
            setUserData(data);
          })
          .catch((error) => {
            console.log("There was an error while trying to retrieve the user's information", error);
          })
    }, []);

    return (
        <div>
            // image
            // name
            // username
            // ReviewList
            // PersonalLibrary
        </div>
    )
};

export default PublicProfilePage;