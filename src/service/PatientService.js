import api from "../configs/Axios";
import { PATIENT_API_CONSTANTS } from "../constants/Index";

export const getAllPatients = async () => {
    const response = await api.get(PATIENT_API_CONSTANTS.GET_PATIENTS);
    return response.data;
};

export const addPatient = async (data) => {
  try {
    const response = await api.post(PATIENT_API_CONSTANTS.ADD_PATIENT, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
