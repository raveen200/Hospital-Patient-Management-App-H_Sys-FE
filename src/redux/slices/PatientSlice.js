import { createSlice } from "@reduxjs/toolkit";
import PatientReducer from "../reducers/PatientReducer";

const PatientSlice = createSlice({
  name: "patientsRedux",
  initialState: {
    patients: [],
    IsLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    PatientReducer.getAllPatients(builder);
  },
});

export default PatientSlice.reducer;
