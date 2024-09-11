import {
  getPatientsAction,
  addPatientAction,
  updatePatientAction,
  deletePatientAction,
  getPatientByIdAction,
} from "../actions/PatientAction";

const reducer = {
  getAllPatients: (builder) => {
    builder.addCase(getPatientsAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPatientsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.patients = action.payload;
    });
    builder.addCase(getPatientsAction.rejected, (state) => {
      state.isLoading = false;
    });
  },

  getPatientById: (builder) => {
    builder.addCase(getPatientByIdAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPatientByIdAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.patient = action.payload;
    });
    builder.addCase(getPatientByIdAction.rejected, (state) => {
      state.isLoading = false;
    });
  },

  addPatient: (builder) => {
    builder.addCase(addPatientAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addPatientAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.patients = [...state.patients, action.payload];
    });
    builder.addCase(addPatientAction.rejected, (state) => {
      state.isLoading = false;
    });
  },

  updatePatient: (builder) => {
    builder.addCase(updatePatientAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updatePatientAction.fulfilled, (state) => {
      state.isLoading = false;
     
    });
    builder.addCase(updatePatientAction.rejected, (state) => {
      state.isLoading = false;
    });
  },

  deletePatient: (builder) => {
    builder.addCase(deletePatientAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deletePatientAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.patients = state.patients.filter(
        (patient) => patient.id !== action.payload
      );
    });
    builder.addCase(deletePatientAction.rejected, (state) => {
      state.isLoading = false;
    });
  },
};

export default reducer;
