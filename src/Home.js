import React, { useState, useEffect } from 'react';
import Textfields from './components/Textfields';
import Calendar from './components/Calendar';

function Home() {

    var blankTaskState = {
        Details: {
            title: "",
            details: "",
        },
        Schedule: {
            date: "",
            time: ""
        }
    };
    const [textData, setTextData] = useState(blankTaskState);
    const [date, setDate] = useState(undefined);
    const [time, setTime] = useState('')
    const [task, setTask] = useState({});

    useEffect(() => {
        console.log('task updated!', task)
    }, [task]);

    const submitForm = async (event) => {
        event.preventDefault();
        blankTaskState = await {
            Details: {
                ...textData
            },
            Schedule: {
                date: date,
                time: time,
            }
        };
        // console.log(blankTaskState);
        await setTask({ ...blankTaskState });
    }

    return (
        <div className="Home">
            <div className="app-container">
                <div className="tasks-container">
                    <div className="tasks">
                        <ul className="tasks-list">
                            <li className="single-task">
                                <span className="emoji">😀</span>
                                <div className="single-task-details">
                                    <span className="title">Title</span>
                                    <span className="description">Description</span>
                                </div>

                            </li>
                            <li className="single-task">
                                <span className="emoji">😀</span>
                                <div className="single-task-details">
                                    <span className="title">Title</span>
                                    <span className="description">Description</span>
                                </div>
                            </li>
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
