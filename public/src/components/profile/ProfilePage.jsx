// This is where the main profile page will be rendered by importing supporting components
import React from 'react';
// import EditInfoModal from '/components/EditInfoModal.jsx';
import Information from './components/Information.jsx';
import ReviewList from './components/ReviewList.jsx';

const ProfilePage = () => {
    // render ReviewList with necessary data from ALL reviews for this user
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
            <h3 style={{"marginTop": "40px", "textAlign": "center"}}>My Reviews</h3>
            <div>
                <ReviewList reviews={exampleReviewData}/>
            </div>
        </div>
    )
};

export default ProfilePage;