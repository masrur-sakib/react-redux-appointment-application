import { CHANGE_BOOKED_SLOT_COLOR, INSERT_SUBMITTED_DATA, SAVE_APPOINTMENT } from '../appointmentActions/appointmentActions';
import timeSlots from '../../Data/timeSlots';

const initialState = {
    timeSlots: timeSlots
}

const appointmentReducers = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_APPOINTMENT:
          const form = document.querySelector('form');
          const data = Object.fromEntries(new FormData(form).entries());
          localStorage.setItem(action.formId, [JSON.stringify(data)]);
          console.log("Appointment Scheduled Successfully");
          window.location.href = "/";
        return {
          timeSlots: timeSlots
        }
      
      case INSERT_SUBMITTED_DATA:
          let appointmentLocal = localStorage.getItem(action.formId);
          let appointmentData = JSON.parse(appointmentLocal);
          if(appointmentData){
              document.getElementById("firstName"+action.formId).value = appointmentData.firstName;
              document.getElementById("lastName"+action.formId).value = appointmentData.lastName;
              document.getElementById("phone"+action.formId).value = appointmentData.phone;
          }
        return {
          timeSlots: timeSlots
        }
      
        case CHANGE_BOOKED_SLOT_COLOR:
          for(let i=0; i<state.timeSlots.length; i++){
              let appointmentLocal = localStorage.getItem(i);
              let appointmentData = JSON.parse(appointmentLocal);
              if(appointmentData){
                  document.getElementById(i).style.background = "red";
              }
          }
        return {
          timeSlots: timeSlots
        }

      default: return state
    }
  }

export default appointmentReducers;