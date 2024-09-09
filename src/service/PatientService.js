import api from "../configs/Axios";
import { PATIENT_API_CONSTANTS } from "../constants/Index";

export const getAllPatients = async () => {
    try {
      const response = await api.get(PATIENT_API_CONSTANTS.GET_PATIENTS);
      return response.data;
    } catch (error) {
      return error;
    }
  };


  