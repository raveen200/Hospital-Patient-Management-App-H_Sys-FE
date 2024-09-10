import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPatients, addPatient } from "../../service/PatientService";
import { PATIENT_REDUX_ACTIONS } from "../../constants/Index";

export const getPatientsAction = createAsyncThunk(
  PATIENT_REDUX_ACTIONS.GET_PATIENTS,
  async () => {
    const response = await getAllPatients();
    return response;
  }
);

export const addPatientAction = createAsyncThunk(
  PATIENT_REDUX_ACTIONS.ADD_PATIENT,
  async (data) => {
    const response = await addPatient(data);
    return response;
  }
);
