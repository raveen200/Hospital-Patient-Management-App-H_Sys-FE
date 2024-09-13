import api from "../configs/Axios";
import { AUTH_API_CONSTANTS } from "../constants/Index";

export const registerPatient = async (data) => {
  const response = await api.post(AUTH_API_CONSTANTS.SIGN_UP, data);
  return response;
};

export const loginPatient = async (data) => {
  const response = await api.post(AUTH_API_CONSTANTS.LOGIN, data);
  return response;
};
