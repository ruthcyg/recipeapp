import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signIn = createAsyncThunk(
  'user/signIn',
  async (credentials, {rejectWithValue}) => {
    try {
      // Simulate an API call
      const user = {name: 'John Doe', email: credentials.email};
      await AsyncStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signOut = createAsyncThunk('user/signOut', async () => {
  await AsyncStorage.removeItem('user');
  return null;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    // You can add reducers for synchronous actions here
  },
  extraReducers: builder => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(signOut.fulfilled, state => {
        state.user = null;
        state.isAuthenticated = false;
        state.error = null;
      });
  },
});

export default userSlice.reducer;
