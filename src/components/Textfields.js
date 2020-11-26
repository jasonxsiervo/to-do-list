import React from 'react';
import '../styles/Textfields.css';


function Textfields() {
    return (
        <div className="title-details-div">
            <input type="text" className="title-textfield" placeholder="Title" />
            <textarea type="text" className="details" rows="27" placeholder="Details" />
        </div>
    );
};

export default Textfields;