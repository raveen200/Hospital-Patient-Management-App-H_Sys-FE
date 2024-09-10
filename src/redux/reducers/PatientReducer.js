import { getPatientsAction, addPatientAction } from "../actions/PatientAction";

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
};

export default reducer;
