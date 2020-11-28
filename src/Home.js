import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from './actions';
import Textfields from './components/Textfields';
import Calendar from './components/Calendar';
import SingleTask from './components/SingleTask';

function Home() {

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
        console.log('task updated!', task)
    }, [tasks]);

    const submitForm = async (event) => {
        event.preventDefault();
        console.log("title: ", textData.data.title);
        console.log("details: ", textData.data.details);
        console.log("id: ", textData.id);
        blankTaskState = await {
            id: textData.id,
            title: textData.data.title,
            details: textData.data.details,
            date: date,
            time: time,
        };
        console.log(blankTaskState);
        // await setTask({ ...blankTaskState });
        dispatch(addTask(blankTaskState));
    }

    return (
        <div className="Home">
            <div className="app-container">
                <div className="tasks-container">
                    <div className="tasks">
                        <ul className="tasks-list">
                            {tasks.map(task => {
                                return (
                                    <SingleTask key={task.id} task={task} />
                                )
                            })}

                        </ul>
                    </div>
                </div>
                <form onSubmit={submitForm}>
                    <div className="task-view">
                        <div className="task-textfields">
                            <Textfields passData={(data) => setTextData(data)} />
                        </div>
                        <div className="task-calendar">
                            <Calendar passDate={(date) => setDate(date)} passTime={(time) => setTime(time)} />
                        </div>
                        <div className="submit-area">
                            <button className="submit-button" type="submit">
                                +
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home;
