import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Textfields.css';


function Textfields({ passData }) {

    const [id, setId] = useState('');
    const [data, setData] = useState({
        title: '',
        details: ''
    });

    function handleChange(e) {
        // switch (e.target.className) {
        //     case 'title':
        //         setTitle(e.target.value);
        //         // passData({ title,  });
        //         break;
        //     case 'details':
        //         setDetails(e.target.value);
        //         // passData({ details });
        //         break;
        //     default:
        //         console.log("none");
        //         break;
        // }
        setData(prev => ({ ...prev, [e.target.className]: e.target.value }));
        setId(uuidv4());
        passData({ id, data });
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