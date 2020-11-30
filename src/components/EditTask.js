import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import '../styles/Textfields.css';
import '../styles/Calendar.css';
import saveButton from '../save.png';
import 'react-day-picker/lib/style.css';

function EditTask(props) {

    const [data, setData] = useState({
        id: '',
        title: '',
        details: '',
        date: '',
        time: ''
    });
    const [date, setDate] = useState(undefined);
    const { task } = props.task;

    function handleChange(e) {
        setData(prev => ({ ...prev, [e.target.className]: e.target.value }));
        // setData(prev => ({ ...prev, id: uuidv4() }));
    };

    function handleDayClick(day, { selected }) {
        if (selected) {
            setDate(undefined);
            return;
        }
        setDate(day);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setData(prev => ({ ...prev, date: date }));
        // dispatch(editTask(data));
    }

    return (
        <form className="task-view" onSubmit={handleSubmit}>

            <div className="task-textareas">
                <div className="title-details-div">
                    <input
                        type="text"
                        value={task.title}
                        className="title"
                        placeholder="Add Title"
                        onChange={(e) => handleChange(e)}
                    />
                    <textarea
                        type="text"
                        value={task.details}
                        className="details"
                        rows="27"
                        placeholder="Details"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>

            <div className="task-schedule">
                <div className="date-time">
                    <div className="date-time-display">
                        <p className="year">2020</p>
                        <p className="date">25</p>
                        <p className="month-day">Nov, Wed</p>
                    </div>
                </div>
                <div className="functional">
                    <div className="date-time-picker">
                        <DayPicker
                            onDayClick={handleDayClick}
                            selectedDays={date}
                        />
                        {/* <PrimereactStyle />
                        <div className='content-section implementation inputgrid-demo'>
                            <h3>Inline</h3>
                            <Calendar
                                value={this.state.date14}
                                onChange={e => this.setState({ date14: e.value })}
                                inline={true}
                            />
                        </div> */}
                        <input
                            type="time"
                            defaultValue={task.time}
                            onChange={(e) => handleChange(e)}
                            className="time"
                        />
                    </div>
                </div>
            </div>

            <div className="submit-area">
                <button title="Submit" className="submit-button" type="submit">
                    <img className="save-img" src={saveButton} alt="save" />
                </button>
            </div>
        </form>
    )
}

export default EditTask
