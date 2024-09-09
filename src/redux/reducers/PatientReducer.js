import { getPatientsAction } from "../actions/PatientAction";

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
};

export default reducer;
