import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeBookedSlotColor } from '../../redux/appointmentActions/appointmentActions';
import TimeSlot from '../TimeSlot/TimeSlot';
import './Home.css';

const Home = (props) => {

  const {timeSlots, changeBookedSlotColor} = props;
  useEffect(()=>{
    changeBookedSlotColor();
  },[]);

  return (
      <div className="container">
          <h2 className="text-secondary text-center m-5 pb-5">
              Schedule an Appointment
          </h2>
          <div className="timeSlot-option">
              {
                  timeSlots.map((timeSlot) => <TimeSlot 
                  key={timeSlot.id} 
                  timeSlot={timeSlot}
                  ></TimeSlot>)
              }
          </div>
      </div>
    );
  };

const mapStateToProps = state => {
  return {
    timeSlots: state.timeSlots
  }
}
  
const mapDispatchToProps = {
  changeBookedSlotColor: changeBookedSlotColor
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);