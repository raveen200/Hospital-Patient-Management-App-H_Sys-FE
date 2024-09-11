export const PATIENT_API_CONSTANTS = {
  GET_PATIENTS: "/api/Patient",
  GET_BY_ID: "/api/Patient",
  ADD_PATIENT: "/api/Patient",
  UPDATE_PATIENT: "/api/Patient",
  DELETE_PATIENT: "/api/Patient",
};

export const PATIENT_REDUX_ACTIONS = {
  GET_PATIENTS: "patient/getPatient",
  GET_BY_ID: "/patient/getByIdPatient",
  ADD_PATIENT: "patient/addPatient",
  UPDATE_PATIENT: "patient/updatePatient",
  DELETE_PATIENT: "patient/deletePatient",
};

export const ROUTES = {
  'Dashboard': {
    path: '/',
    name: 'Dashboard'
  },
  'Patients': {
    path: '/patients',
    name: 'Patients'
  },
  'Login': {
    path: '/login',
    name: 'Login'
  },
  'Sign_Up': {
    path: '/signup',
    name: 'Sign Up'
  }
};
