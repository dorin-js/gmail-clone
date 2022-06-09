import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageIsOpen: false,
  showInputs: true,
  snackbarVisibility: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    switchShowInputs: (state) => {
      state.showInputs = !state.showInputs;
    },
    setShowInputs: (state) => {
      state.showInputs = true;
    },
    showSnackbar: (state) => {
      state.snackbarVisibility = true;
    },
    hideSnackbar: (state) => {
      state.snackbarVisibility = false;
    },
  },
});

export const {
  openSendMessage,
  closeSendMessage,
  switchShowInputs,
  setShowInputs,
  showSnackbar,
  hideSnackbar,
} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectShowInputs = (state) => state.mail.showInputs;
export const selectSnackbarVisibility = (state) =>
  state.mail.snackbarVisibility;
export default mailSlice.reducer;
