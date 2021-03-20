import moment from 'moment';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openPopup, setDay, setMonth } from '../redux/popup';

import arrow from '../assets/arrow.svg';

const DAYS = ['s', 'm', 't', 'w', 't', 'f', 's'];

const Calendar = () => {
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());

    const dispatch = useDispatch();

    const buildCalendar = (value) => {
        const startDay = value.clone().startOf('month').startOf('week');
        const endDay = value.clone().endOf('month').endOf('week');
        const day = startDay.clone().subtract(1, 'day');
        const calendar = [];

        while (day.isBefore(endDay, 'day')) {
            calendar.push(
                Array(7)
                    .fill(0)
                    .map(() => day.add(1, 'day').clone()),
            );
        }

        return calendar;
    };

    const isSelected = (day) => {
        return value.isSame(day, 'day');
    };

    const isNotSameMonth = (day) => {
        return !value.isSame(day, 'month');
    };

    const dayStyles = (day) => {
        if (isNotSameMonth(day)) return 'other';
        if (isSelected(day)) return 'selected';
        return '';
    };

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value]);

    const currMonthName = () => {
        return value.format('MMMM');
    };

    const currYear = () => {
        return value.format('YYYY');
    };

    const prevMonth = () => {
        return value.clone().subtract(1, 'month');
    };
    const nextMonth = () => {
        return value.clone().add(1, 'month');
    };

    const handleClickDay = (day) => {
        setValue(day);

        const month = day.format('MMMM');
        const fullDay = `${day.format('Do')} ${day.format('dddd')}`;

        dispatch(setMonth(month));
        dispatch(setDay(fullDay));
        dispatch(openPopup());
    };

    return (
        <div className="calendar">
            <div className="head">
                <div className="previous" onClick={() => setValue(prevMonth())}>
                    <img src={arrow} />
                </div>
                <div className="current">
                    {currMonthName()} {currYear()}
                </div>
                <div className="next" onClick={() => setValue(nextMonth())}>
                    <img src={arrow} />
                </div>
            </div>
            <div className="delimiter"></div>
            <div className="body">
                {calendar.map((week, idx) => (
                    <div key={idx}>
                        {week.map((day, idx) => (
                            <div key={idx} className="day" onClick={() => handleClickDay(day)}>
                                <div className={dayStyles(day)}>{day.format('DD').toString()}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="delimiter"></div>
            <div className="day-names">
                {DAYS.map((day, idx) => (
                    <div key={idx} className="week">
                        {day}
                    </div>
                ))}
            </div>
            <div className="delimiter"></div>
        </div>
    );
};

export default Calendar;
