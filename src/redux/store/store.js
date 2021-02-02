import { createStore } from "redux";
import appointmentReducers from "../appointmentReducers/appointmentReducers";

const store = createStore(appointmentReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;