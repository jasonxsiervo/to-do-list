import React, { useState, useEffect } from 'react';
import DayPicker from 'react-day-picker';
import { useDispatch } from 'react-redux';
import { editTask } from '../actions';
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
        time: '',
        strike: false
    });
    const [date, setDate] = useState(undefined);
    const { task } = props.task;
    const dispatch = useDispatch();

    useEffect(() => {
        setData(task)
        console.log('task: ', task)
        return () => setData({
            id: '',
            title: '',
            details: '',
            date: '',
            time: '',
            strike: false,
        })
    }, [task, props]);

    function handleChange(e) {
        setData(state => ({ ...state, [e.target.className]: e.target.value }));
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
        dispatch(editTask(data));
    }

    return (
        <form className="task-view" onSubmit={handleSubmit}>

            <div className="task-textareas">
                <div className="title-details-div">
                    <h1>Edit Task</h1>
                    <input
                        type="text"
                        value={data.title}
                        className="title"
                        onChange={handleChange}
                    />
                    <textarea
                        type="text"
                        value={data.details}
                        className="details"
                        rows="27"
                        onChange={handleChange}
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

            {data.strike ?
                null
                :
                <div className="submit-area">
                    <button title="Submit" className="submit-button" type="submit">
                        <img className="save-img" src={saveButton} alt="save" />
                    </button>
                </div>
            }
        </form>
    )
}

export default EditTask
