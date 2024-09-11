import { createSlice } from "@reduxjs/toolkit";
import PatientReducer from "../reducers/PatientReducer";

const PatientSlice = createSlice({
  name: "patientsRedux",
  initialState: {
    patients: [],
    patient: {},
    IsLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    PatientReducer.getAllPatients(builder);
    PatientReducer.addPatient(builder);
    PatientReducer.deletePatient(builder);
    PatientReducer.getPatientById(builder);
    PatientReducer.updatePatient(builder);
  },
});

export default PatientSlice.reducer;
