import React from 'react';

const SingleTask = (props) => {
    // console.log("props: ", props)
    return (
        <li className="single-task">
            <span className="emoji">😀</span>
            <div className="single-task-details">
                <span className="title-tag">{props.task.title}</span>
                <span className="description-tag">{props.task.details}</span>
            </div>

        </li>
    )
};

export default SingleTask;
