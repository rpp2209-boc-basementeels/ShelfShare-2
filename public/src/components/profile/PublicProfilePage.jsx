import React, { useState, useEffect } from 'react';
import ReviewList from './components/ReviewList.jsx';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
// import personal library component from Melodie

const PublicProfilePage = (props) => {

    // const [userData, setUserData] = useState([]);

    // useEffect(() => {
    //     axios.get(`/publicPersonalInformation/${props.username}`)
    //       .then((data) => {
    //         setUserData(data);
    //       })
    //       .catch((error) => {
    //         console.log("There was an error while trying to retrieve the user's information", error);
    //       })
    // }, []);

    var exampleReviewData = [{
        body: 'Gosh this book transformed my life!',
        title: 'The Book of Eels',
        date: 'May 11, 2023',
        image: 'https://static01.nyt.com/images/2020/05/26/books/22EELBOOK/22EELBOOK-superJumbo.jpg?quality=75&auto=webp',
        username: 'maddiesime'
    }];

    return (
        <div>
            <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "center"}}>
                <div style={{"textAlign": "center", "position": "relative", "width": "30vw", "minWidth": "max-content"}}>
                    <Button style={{"position": "absolute", "top": 0, "left": "-10vw"}} variant="outline-primary" onClick={() => {props.set('')}}>Back</Button>
                    <Image style={{"borderRadius": "50%", "width": "10vw"}} src={'https://www.mtdemocrat.com/files/2015/05/DSC_7285e-1024x984.jpg'}></Image>
                    <h4 style={{"marginTop": "2vh", "marginBottom": "0vh", "fontFamily": "Helvetica"}}>Maddie Sime</h4>
                    <h6 style={{"fontFamily": "Helvetica"}}>@maddiesime</h6>
                    <hr></hr>
                </div>
            </div>
            <h3 style={{"marginTop": "5vh", "marginBottom": "5vh", "textAlign": "center", "fontFamily": "Helvetica"}}>This User's Reviews</h3>
            <div>
                <ReviewList reviews={exampleReviewData}/>
            </div>
            <h3 style={{"marginTop": "5vh", "marginBottom": "5vh", "textAlign": "center", "fontFamily": "Helvetica"}}>This User's Shelf</h3>
        </div>
    )
};

export default PublicProfilePage;