
import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading : false,
    messages : [],
    error : null,
}
export const slice = createSlice({
    name : "chatbot",
    initialState,
    reducers : {},
    extraReducers : (builder) => {}
});

export const store = configureStore({
  reducer: {
    chatbot: slice.reducer,
  },
});


