import React, { useState } from 'react';
import { deleteTask } from '../actions';
import { useDispatch } from 'react-redux';

const SingleTask = (props) => {
    const [strike, setStrike] = useState(false);
    const dispatch = useDispatch();
    const { task } = props;

    const handleDelete = () => {
        props.toggle();
        dispatch(deleteTask(props.task.id));
    }

    const handleClick = () => {
        props.getData({ task });
    }

    const strikeText = () => {
        setStrike(!strike);
    }

    return (
        <li className="single-task">
            <span className="emoji" onClick={handleClick}>🐧</span>
            <div className="single-task-details" onClick={handleClick}>
                <span className={strike ? "title-tag-strike" : "title-tag"}>{task.title}</span>
                <span className={strike ? "description-tag-strike" : "description-tag"}>{task.details}</span>
            </div>
            {!strike ? <button title="Done" className="done-button" onClick={strikeText}>✅</button> : <button className="done-button" onClick={strikeText} disabled></button>}
            <button title="Delete" className="delete-button" onClick={handleDelete}>❌</button>
        </li>
    )
};

export default SingleTask;
