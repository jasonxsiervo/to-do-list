import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SingleTask from './components/SingleTask';
import CreateTask from './components/CreateTask';
import EditTask from './components/EditTask';

function Home({ logout, ...rest }) {

    const [task, setTask] = useState({});
    const tasks = useSelector((state) => state.tasks);
    const [renderAdd, setRenderAdd] = useState(true);

    useEffect(() => {
    }, [tasks]);

    function handleData(data) {
        setTask(data);
        setRenderAdd(false);
    }

    const toggle = () => {
        setTask({});
        setRenderAdd(true);
    }

    return (
        <div className="Home">
            <div className="app-container">
                <div className="tasks-container">
                    <div className="tasks">
                        <p className="tasks-header">Tasks</p>
                        <ul className="tasks-list">
                            {tasks.map(task => {
                                return (
                                    <SingleTask
                                        key={task.id}
                                        task={task}
                                        getData={(data) => handleData(data)}
                                        toggle={toggle}
                                    />
                                )
                            })}

                        </ul>
                        <button title="Add Task" className="add-button" onClick={toggle}>
                            +
                        </button>
                    </div>
                </div>

                {
                    Object.keys(task).length === 0 && renderAdd ? <CreateTask /> : <EditTask task={task} />
                }
            </div>
        </div>
    );
}

export default withRouter(Home);
