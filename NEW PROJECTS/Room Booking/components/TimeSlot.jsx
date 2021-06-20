
import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TimeSlot = () => {
    const slots = [["10.00 AM","10:00:00"], ["10:30 AM" ,"10:30:00"] ,["11:00 AM","11:00:00"], ["11:30 AM" ,"11:30:00"], ["12:00 PM","12:00:00"],["12:30 PM","12:30:00"], ["1:00 PM","01:00:00"],
    ["1:30 PM","01:30:00"], ["2:00 PM","02:00:00"],["2:30 PM","02:30:00"],["3:00 PM","03:00:00"],["3:30 PM","03:30:00"],["4:00 PM","04:00:00"],["4:30 PM","04:30:00"],["5:00 PM","05:00:00"],["5:30 PM","05:30:00"],["6:00 PM","06:00:00"],["6:30 PM","06:30:00"],["7:00 PM","07:00:00"]
]

    const {time,SetTime} = useContext(GlobalContext);
    const ChangeTime =(e)=>{
        SetTime(e.target.value);
    }
    return (
        <div className ="slots">
            {slots.map((item, index)=>{
                return <button key = {index} onClick ={ChangeTime} value={item[1]}  className= 'btn'>{item[0]}</button>
            })}
             {console.log(time)}
        </div>
    )
}
