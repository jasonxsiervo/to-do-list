import React, { useState, useEffect } from 'react';
import DayPicker from 'react-day-picker';
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';
import '../styles/Textfields.css';
import '../styles/Calendar.css';
import 'react-day-picker/lib/style.css';
import "react-datepicker/dist/react-datepicker.css";
import saveButton from '../save.png';

function CreateTask() {

    const [data, setData] = useState({
        id: '',
        title: '',
        details: '',
        date: '',
        time: '',
        strike: false,
    });
    const [date, setDate] = useState(undefined);
    const dispatch = useDispatch();

    function handleChange(e) {
        setData(state => ({ ...state, [e.target.className]: e.target.value }));
        setData(state => ({ ...state, id: uuidv4() }));
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
        setData(state => ({ ...state, date: date }));
        dispatch(addTask(data));
    }

    return (
        <form className="task-view" onSubmit={handleSubmit}>

            <div className="task-textareas">
                <div className="title-details-div">
                    <input
                        type="text"
                        //defaultValue={data.title}
                        className="title"
                        placeholder="Add Title"
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <textarea
                        type="text"
                        //defaultValue={data.details}
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
                        {/* <DatePicker
                            selected={data.date}
                            onChange={date => setStartDate(date)}
                            inline
                        /> */}
                        <input
                            type="time"
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

export default CreateTask;
