import React, {useState, useEffect} from 'react'

const DateTimeDisplay = () => {
    const[Time, setTime] = useState(new Date());
    const[date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setTime(new Date()),1000)
    },[])
    useEffect(() =>{
        setInterval(() => setDate(new Date()),1000)
    },[])
  return (
    <div>
    <p>{Time.toLocaleTimeString()}</p>
    <p className='date'>{date.toLocaleDateString()}</p>
    </div>
  )
}

export default DateTimeDisplay;
