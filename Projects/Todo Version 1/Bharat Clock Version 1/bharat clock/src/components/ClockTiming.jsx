import React from 'react'
import css from './ClockTiming.module.css'

function ClockTiming() {
    let clocktiming = "This is the current time :"
    let currenttime = new Date().toLocaleString();
    ;
    return (
    <p>{clocktiming} <span className={css.currentTime}>{currenttime}</span></p>
  )
}

export default ClockTiming
