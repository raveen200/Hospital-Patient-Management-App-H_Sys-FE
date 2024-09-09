import { configureStore } from "@reduxjs/toolkit";
import PatientSlice from "./slices/PatientSlice";

export const store = configureStore({
  reducer: {
    patientsRedux: PatientSlice,
  },
});
