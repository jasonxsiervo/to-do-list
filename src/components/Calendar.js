import React, { useState, useEffect } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../styles/Calendar.css';

function Calendar({ passDate, passTime }) {

    const [date, setDate] = useState(undefined);
    const [time, setTime] = useState('');

    useEffect(() => {
        passDate(date);
    }, [date]);

    useEffect(() => {
        passTime(time);
    }, [time]);

    function handleDayClick(day, { selected }) {
        if (selected) {
            setDate(undefined);
            return;
        }
        setDate(day);
    };

    function handleTimeChange(e) {
        setTime(e.target.value);
    };

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
                    <DayPicker
                        onDayClick={handleDayClick}
                        selectedDays={date}
                    />
                    <input
                        type="time"
                        onChange={(e) => handleTimeChange(e)}
                        className="time"
                    />
                </div>
            </div>
        </>
    );
};


export default Calendar;