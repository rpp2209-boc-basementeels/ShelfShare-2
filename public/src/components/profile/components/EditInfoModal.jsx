import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const EditInfoModal = (props) => {
    return (
        <div>
            <p>Edit your information here</p>
            <Button variant="outline-primary" onClick={() => {props.closeButton(!props.buttonClicked)}}>Save Changes</Button>
        </div>
    )
};

export default EditInfoModal;
