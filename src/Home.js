import React from 'react';
import Textfields from './components/Textfields';
import Calendar from './components/Calendar';

function Home() {

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
                <div className="task-view">
                    <div className="task-textfields">
                        <Textfields />
                    </div>
                    <div className="task-calendar">
                        <Calendar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
