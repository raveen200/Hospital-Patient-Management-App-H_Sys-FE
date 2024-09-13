import api from "../configs/Axios";
import { PATIENT_API_CONSTANTS } from "../constants/Index";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const getAllPatients = async () => {
  const response = await api.get(
    PATIENT_API_CONSTANTS.GET_PATIENTS,
    API_HEADER
  );
  return response.data;
};

export const getPatientById = async (id) => {
  const response = await api.get(
    `${PATIENT_API_CONSTANTS.GET_BY_ID}/${id}`,
    API_HEADER
  );
  return response.data;
};

export const addPatient = async (data) => {
  const response = await api.post(
    PATIENT_API_CONSTANTS.ADD_PATIENT,
    data,
    API_HEADER
  );
  return response.data;
};

export const updatePatient = async (data) => {
  const response = await api.put(
    PATIENT_API_CONSTANTS.UPDATE_PATIENT,
    data,
    API_HEADER
  );
  return response.data;
};

export const deletePatient = async (id) => {
  const response = await api.delete(
    `${PATIENT_API_CONSTANTS.DELETE_PATIENT}/${id}`,
    API_HEADER
  );
  return response.data;
};

const API_HEADER = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
};
