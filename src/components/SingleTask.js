import React, { useState, useEffect } from 'react';
import { deleteTask, editTask } from '../actions';
import { useDispatch } from 'react-redux';

const SingleTask = (props) => {
    const [strike, setStrike] = useState(false);
    const [taskState, setTaskState] = useState({
        id: '',
        title: '',
        details: '',
        date: '',
        time: '',
        strike: false,
    })
    const dispatch = useDispatch();
    const { task } = props;

    useEffect(() => {
        setTaskState({ ...task, strike: true });
    }, [strike])

    const handleDelete = () => {
        props.toggle();
        dispatch(deleteTask(props.task.id));
    }

    const handleClick = () => {
        props.getData({ task });
    }

    const strikeText = async () => {
        setStrike(!strike);
        dispatch(editTask(taskState))
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
