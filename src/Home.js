import React from 'react';

function Home() {

    return (
        <div className="Home">
            <div className="app-container">
                <div className="task-list">
                    <h3>task-list</h3>
                    <button className="pure-material-button-contained">Button</button>

                    <div className="single-task">
                        <h3 className="overview-title">Title</h3>
                        <p className="overview-description">Description</p>
                    </div>
                </div>
                <div className="task-view">
                    <h3>task-view</h3>
                </div>
            </div>
        </div>
    );
}

export default Home;
