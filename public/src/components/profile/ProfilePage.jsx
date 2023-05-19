import React, { useEffect, useState } from 'react';
import Information from './components/Information.jsx';
import ReviewList from './components/ReviewList.jsx';
import axios from 'axios';
import EditInfoModal from './components/EditInfoModal.jsx';

const ProfilePage = (props) => {

    const [userReviews, setUserReviews] = useState([]);
    const [editButtonClicked, setEditButtonClicked] = useState(false);

    useEffect(() => {
        axios.get(`/reviews/${props.user.username}`)
          .then((reviewData) => {
            setUserReviews(reviewData.data);
          })
          .catch((error) => {
            console.log("There was an error while trying to retrieve the user's reviews", error);
          })
    }, []);

    return (
        <div>
          {editButtonClicked ? <div style={{"display": "flex", "justifyContent": "center"}}>
                <EditInfoModal info={props.user} closeButton={setEditButtonClicked} buttonClicked={editButtonClicked} setUser={props.setUser}/>
            </div> : <div>
            <Information editButtonClicked={editButtonClicked} setEditButtonClicked={setEditButtonClicked} info={props.user} isLibrary={props.user.is_library} setUser={props.setUser} />
            <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "center"}}>
                <div style={{"textAlign": "center", "position": "relative", "width": "30vw", "minWidth": "max-content"}}>
                    <hr></hr>
                </div>
            </div>
            <h3 style={{"marginTop": "5vh", "marginBottom": "5vh", "textAlign": "center", "fontFamily": "Helvetica"}}>My Reviews</h3>
            <div>
                {userReviews.length === 0 ? <h6 style={{"textAlign": "center"}}>You haven't left any reviews yet</h6> : <ReviewList reviews={userReviews}/>}
            </div>
              </div>}
        </div>
    )
};

export default ProfilePage;