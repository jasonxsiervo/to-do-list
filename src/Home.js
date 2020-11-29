import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addTask } from './actions';
import Textfields from './components/Textfields';
import Calendar from './components/Calendar';
import SingleTask from './components/SingleTask';

function Home({ logout, ...rest }) {

    var blankTaskState = {
        id: undefined,
        title: "",
        details: "",
        date: "",
        time: "",
    };
    const [textData, setTextData] = useState(blankTaskState);
    const [date, setDate] = useState(undefined);
    const [time, setTime] = useState('')
    const [task, setTask] = useState({});
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    // console.log("tasks sa home: ", tasks);

    useEffect(() => {
        // console.log('task updated!', task)
    }, [task]);

    const submitForm = async (event) => {
        event.preventDefault();
        console.log("title: ", textData.data);
        // console.log("details: ", textData.data.details);
        // console.log("id: ", textData.id);
        blankTaskState = await {
            id: textData.id || '',
            title: textData.data.title || '',
            details: textData.data.details || '',
            date: date || '',
            time: time || '',
        };
        console.log(blankTaskState);
        // await setTask({ ...blankTaskState });
        dispatch(addTask(blankTaskState));
    };

    return (
        <div className="Home">
            <div className="app-container">
                <div className="tasks-container">
                    <div className="tasks">
                        <ul className="tasks-list">
                            {tasks.map(task => {
                                return (
                                    <SingleTask
                                        key={task.id}
                                        task={task}
                                        getData={(data) => setTask(data)}
                                    />
                                )
                            })}

                        </ul>
                    </div>
                </div>
                <form onSubmit={submitForm}>
                    <div className="task-view">
                        <div className="task-textfields">
                            <Textfields task={task} passData={(data) => setTextData(data)} />
                        </div>
                        <div className="task-calendar">
                            <Calendar task={task} passDate={(date) => setDate(date)} passTime={(time) => setTime(time)} />
                        </div>
                        <div className="submit-area">
                            <button title="Submit" className="submit-button" type="submit">
                                +
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default withRouter(Home);
