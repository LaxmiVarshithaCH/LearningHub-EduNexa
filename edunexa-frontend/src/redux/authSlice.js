// // redux/authSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const initialState = { user:null, loading:false, error:null };

// export const loginUser = createAsyncThunk('auth/login', async ({email,password})=>{
//   // placeholder: just return user
//   return { email, username:'Demo User' };
// });

// const authSlice = createSlice({
//   name:'auth',
//   initialState,
//   reducers:{},
//   extraReducers: builder => {
//     builder
//       .addCase(loginUser.pending, state=>{ state.loading=true })
//       .addCase(loginUser.fulfilled, (state,action)=>{ state.loading=false; state.user=action.payload })
//       .addCase(loginUser.rejected, (state,action)=>{ state.loading=false; state.error='Login failed' })
//   }
// });

// export default authSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as authService from '../services/authService';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      return await authService.login(credentials);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || 'Login failed');
    }
  }
);

// Async thunk for signup
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (data, thunkAPI) => {
    try {
      return await authService.signup(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || 'Signup failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(loginUser.fulfilled, (state, action) => { state.loading = false; state.user = action.payload; })
      .addCase(loginUser.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      
      .addCase(signupUser.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(signupUser.fulfilled, (state, action) => { state.loading = false; })
      .addCase(signupUser.rejected, (state, action) => { state.loading = false; state.error = action.payload; });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
