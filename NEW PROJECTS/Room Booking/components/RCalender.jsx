import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { GlobalContext } from '../context/GlobalState';

export const RCalender = () => {
    const {date} = useContext(GlobalContext);
    const {ADDdate} = useContext(GlobalContext);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const[day, setDay] = useState(days[date.getDay()]);
    const[month, setMonth] = useState(months[date.getMonth()]);
    
    const onChange = (date) =>{
        
        ADDdate(date);

        setDay(days[date.getDay()]);
        setMonth(months[date.getMonth()]);
        
    }
    return (
        <div>
            <Calendar
        onChange={onChange}
        value={date}    />
        <p style={{textAlign: "center"}}>{`${day} ${date.getDate()} ${month}`}</p>
        </div>
    )
}
