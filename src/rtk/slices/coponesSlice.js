import Toast from "@/alerts/Toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const fetchAllCopones = createAsyncThunk(
  "coponesSlice/fetchAll",
  async () => {
    const res = await fetch("http://localhost:3000/api/copones");
    const data = res.json();
    return data;
  }
);

export const usedCurrentCopone = createAsyncThunk(
  "coponesSlice/usedCurrentCopone",
  async (coponeId) => {
    const res = await fetch("http://localhost:3000/api/copones/used", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coponeId),
    });
    const data = res.json();
    return data;
  }
);

const initialState = {
  copones: [],
  currentCopone: {},
};

const coponesSlice = createSlice({
  name: "coponesSlice",
  initialState,
  reducers: {
    setCopones: (state, action) => {
      state.copones = action.payload;
    },
    searchCopone: (state, action) => {
      const copone = state.copones.find((cop) => cop.code == action.payload);
      if (copone) {
        state.currentCopone = copone;
        Toast.fire({
          icon: "success",
          title: "Valid Copone",
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "Unvalid Copone",
        });
      }
    },
    removeCurrentCopone: (state) => {
      state.currentCopone = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return (state = { ...state, ...action.payload.copones });
    });
  },
});

export default coponesSlice.reducer;
export const { setCopones, searchCopone, removeCurrentCopone } =
  coponesSlice.actions;
