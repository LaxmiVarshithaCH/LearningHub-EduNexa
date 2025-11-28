// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   currentPage: 'home', // default page
// };

// const navSlice = createSlice({
//   name: 'nav',
//   initialState,
//   reducers: {
//     navigate: (state, action) => {
//       state.currentPage = action.payload;
//     },
//   },
// });

// export const { navigate } = navSlice.actions;
// export default navSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 'home', // default page
  courseId: null,      // for when a course is selected
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    navigate: (state, action) => {
      if (typeof action.payload === 'string') {
        // if we just send "login", "signup", etc.
        state.currentPage = action.payload;
        state.courseId = null;
      } else if (typeof action.payload === 'object') {
        // if we send { currentPage: "course", courseId: 2 }
        state.currentPage = action.payload.currentPage;
        state.courseId = action.payload.courseId ?? null;
      }
    },
  },
});

export const { navigate } = navSlice.actions;
export default navSlice.reducer;
