import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import coponesReducer from "./slices/coponesSlice";
import loadingReducer from "./slices/loadingSlice";
import { createWrapper } from "next-redux-wrapper";
// const store = () =>
//   configureStore({
//     reducer: {
//       products: productsReducer,
//       copones: coponesSlice,
//       Loading: loadingSlice,
//     },
//   });
const makeStore = () => {
  let store = configureStore({
    reducer: {
      products: productsReducer,
      copones: coponesReducer,
      Loading: loadingReducer,
    },
  });

  return store;
};

// export default store;
export const wrapper = createWrapper(makeStore);
