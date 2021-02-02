import React from 'react';
import { Link } from 'react-router-dom';
import './TimeSlot.css';

const TimeSlot = (props) => {
    return (
        <div id={props.timeSlot.id} className="timeSlot">
            <Link to={'/form/'+props.timeSlot.id} style={{ textDecoration: 'none' }}>
                <p>{props.timeSlot.name}</p>
            </Link>
        </div>
    );
};

export default TimeSlot;