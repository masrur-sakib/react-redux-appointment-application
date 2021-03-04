import React, { useEffect } from "react";
import "./AppointmentForm.css";
import { Link, useParams } from "react-router-dom";
import {
  insertSubmittedData,
  saveAppointment,
} from "../../redux/appointmentActions/appointmentActions";
import { connect } from "react-redux";

const AppointmentForm = (props) => {
  const { formId } = useParams();
  const { saveAppointment, insertSubmittedData } = props;

  useEffect(() => {
    insertSubmittedData(formId);
  });

  return (
    <div className="container">
      <div className="appointment-form-section">
        <h2 className="mb-5">Appointment Form</h2>
        <form
          id="appointmentData"
          onSubmit={(e) => {
            e.preventDefault();
            saveAppointment(formId);
            e.target.reset();
          }}
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              id={"firstName" + formId}
              className="form-control"
              name="firstName"
              placeholder="First Name"
              required
            ></input>
            <label htmlFor={"firstName" + formId}>First Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              id={"lastName" + formId}
              className="form-control"
              name="lastName"
              placeholder="Last Name"
              required
            ></input>
            <label htmlFor={"lastName" + formId}>Last Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              id={"phone" + formId}
              className="form-control"
              name="phone"
              placeholder="Phone Number"
              required
            ></input>
            <label htmlFor={"phone" + formId}>Phone Number</label>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-danger" type="reset">
                  Cancel
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-success" type="submit" value="Send">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="pt-4">
          <Link to="/" style={{ textDecoration: "none" }}>
            &#8592; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    timeSlots: state.timeSlots,
  };
};

const mapDispatchToProps = {
  saveAppointment: saveAppointment,
  insertSubmittedData: insertSubmittedData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentForm);
