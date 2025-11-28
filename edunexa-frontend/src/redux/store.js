// src/redux/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import navReducer from './navSlice';

// export const store = configureStore({
//   reducer: {
//     nav: navReducer,
//   },
// });
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import navReducer from './navSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
  },
});
