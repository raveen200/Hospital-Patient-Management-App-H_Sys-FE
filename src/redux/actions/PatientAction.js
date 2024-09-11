import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPatients,
  addPatient,
  updatePatient,
  deletePatient,
  getPatientById,
} from "../../service/PatientService";
import { PATIENT_REDUX_ACTIONS } from "../../constants/Index";

export const getPatientsAction = createAsyncThunk(
  PATIENT_REDUX_ACTIONS.GET_PATIENTS,
  async () => {
    const response = await getAllPatients();
    console.log(response, "response");
    return response;
  }
);

export const getPatientByIdAction = createAsyncThunk(
  PATIENT_REDUX_ACTIONS.GET_PATIENT_BY_ID,
  async (id) => {
    const response = await getPatientById(id);
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

export const updatePatientAction = createAsyncThunk(
  PATIENT_REDUX_ACTIONS.UPDATE_PATIENT,
  async (data) => {
    const response = await updatePatient(data);
    return response;
  }
);

export const deletePatientAction = createAsyncThunk(
  PATIENT_REDUX_ACTIONS.DELETE_PATIENT,
  async (id) => {
    const response = await deletePatient(id);
    return response;
  }
);
