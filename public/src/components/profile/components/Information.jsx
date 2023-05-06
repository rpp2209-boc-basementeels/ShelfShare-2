import React from 'react';
import Image from 'react-bootstrap/Image'

const Information = () => {
    return (
        <div style={{"display": "flex", "justify-content": "center"}}>
            <div style={{"align-items": "center"}}>
                <Image style={{"height": "17vh", "width": "15vw"}} roundedCircle src="https://cdn.shopify.com/s/files/1/0150/0643/3380/products/SB-Standees-Spong-1_1200x1200.jpg?v=1603744567"></Image>
                <h4>Spongebob Squarepants</h4>
                <h6>spongebob@gmail.com</h6>
                <h6>Age: 18</h6>
                <h6>Gender: Male</h6>
                <h6>124 Conch St., Bikini Bottom, Earth 12345</h6>
            </div>
        </div>
    )
};

export default Information;