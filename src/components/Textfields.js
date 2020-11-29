import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Textfields.css';


function Textfields(props) {

    const [id, setId] = useState('');
    const [data, setData] = useState({
        title: '',
        details: ''
    });
    const { task } = props.task;


    // useEffect(() => {
    //     console.log('THERE IS AN UPDATE IN TEXTFIELD', props.task.task.id);
    //     // console.log("props.task.title: ", props.task.title);
    //     // console.log("props.task.details: ", props.task.title);
    //     setData({ title: props.task.task.title, details: props.task.task.details });
    //     console.log('value of component state: ', data);
    // }, [props.task])

    function handleChange(e) {
        setData(prev => ({ ...prev, [e.target.className]: e.target.value }));
        setId(uuidv4());
        props.passData({ id, data });
    }

    return (
        <div className="title-details-div">
            <input
                type="text"
                //defaultValue={data.title}
                className="title"
                placeholder={task ? task.title : "Title"}
                onChange={(e) => handleChange(e)}
            />
            <textarea
                type="text"
                //defaultValue={data.details}
                className="details"
                rows="27"
                placeholder={task ? task.details : "Details"}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
};

export default Textfields;