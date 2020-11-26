import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../styles/Calendar.css';

function Calendar() {
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <>
            <div className="date-time">
                <div className="date-time-display">
                    <p className="year">2020</p>
                    <p className="date">25</p>
                    <p className="month-day">Nov, Wed</p>
                </div>
            </div>
            <div className="functional">
                <div className="date-time-picker">
                    <DayPicker />
                    <input type="time" className="time-input" />
                </div>
            </div>
        </>
    );
};

export default Calendar;