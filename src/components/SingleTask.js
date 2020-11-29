import React, { useState } from 'react';
import { deleteTask } from '../actions';
import { useDispatch } from 'react-redux';

const SingleTask = (props) => {

    const [strike, setStrike] = useState(false);
    // console.log("props: ", props.task)
    const dispatch = useDispatch();
    const { task } = props;

    const handleDelete = () => {
        // console.log('delete!');
        // console.log("id: ", props.task.id);
        dispatch(deleteTask(props.task.id));
    }

    const handleClick = () => {
        props.getData({ task });
    }

    const strikeText = () => {
        setStrike(!strike);
    }

    return (
        <li className="single-task" onClick={handleClick}>
            <span className="emoji">🐧</span>
            <div className="single-task-details">
                <span className={strike ? "title-tag-strike" : "title-tag"}>{task.title}</span>
                <span className={strike ? "description-tag-strike" : "description-tag"}>{task.details}</span>
            </div>
            {!strike ? <button title="Done" className="done-button" onClick={strikeText}>✅</button> : <butto className="done-button" onClick={strikeText} disabled></butto>}
            <button title="Delete" className="delete-button" onClick={handleDelete}>❌</button>
        </li>
    )
};

export default SingleTask;
