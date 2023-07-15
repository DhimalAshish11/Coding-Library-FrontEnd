import { createSlice } from "@reduxjs/toolkit";
// const [modalShow, setModalShow] = React.useState(true);

const initialState = {
  modalShow: false,
};
const systemlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setModalShow: (state, { payload }) => {
      state.modalShow = payload;
    },
  },
});

const { reducer, actions } = systemlice;

export const { setModalShow } = actions;
export default reducer;
