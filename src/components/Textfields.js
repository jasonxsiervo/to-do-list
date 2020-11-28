import React, { useState, useEffect } from 'react';
import '../styles/Textfields.css';


function Textfields({ passData }) {

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

    // useEffect(() => {
    //     console.log("title: ", title);
    //     console.log("description: ", description);
    // }, []);

    function handleChange(e) {
        switch (e.target.className) {
            case 'title':
                setTitle(e.target.value);
                // passData({ title,  });
                break;
            case 'details':
                setDetails(e.target.value);
                // passData({ details });
                break;
            default:
                console.log("none");
                break;
        }
        passData({ title, details });
        // console.log(title + ' space ' + details);
    }

    return (
        <div className="title-details-div">
            <input
                type="text"
                className="title"
                placeholder="Title"
                onChange={(e) => handleChange(e)}
            />
            <textarea
                type="text"
                className="details"
                rows="27"
                placeholder="Details"
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
};

export default Textfields;