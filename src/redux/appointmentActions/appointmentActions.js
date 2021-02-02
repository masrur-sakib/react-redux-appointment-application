export const SAVE_APPOINTMENT = 'SAVE_APPOINTMENT';
export const INSERT_SUBMITTED_DATA = 'INSERT_SUBMITTED_DATA';
export const CHANGE_BOOKED_SLOT_COLOR = 'CHANGE_BOOKED_SLOT_COLOR';

export const saveAppointment = (formId) => {
  return {
    type: SAVE_APPOINTMENT,
    formId
  }
}

export const insertSubmittedData = (formId) => {
  return {
    type: INSERT_SUBMITTED_DATA,
    formId
  }
}

export const changeBookedSlotColor = () => {
  return {
    type: CHANGE_BOOKED_SLOT_COLOR
  }
}
