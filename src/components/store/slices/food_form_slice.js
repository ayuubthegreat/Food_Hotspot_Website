import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_Call, Request_Failure, Request_Started, Request_Success } from "../../../../Website/website_to_api_functions";


const initialState = {
    loading: false,
    error: null,
    data: null,
}

export const submitFoodForm = createAsyncThunk(
    "foodForm/submitFoodForm",
    async (form_data, { rejectWithValue }) => {
        try {
            const response = await API_Call("post", "food/form", form_data);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const foodFormSlice = createSlice({
    name: "foodForm",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitFoodForm.pending, Request_Started)
            .addCase(submitFoodForm.fulfilled, Request_Success)
            .addCase(submitFoodForm.rejected, (state, action) => Request_Failure(state, action));
    }
})
export const {} = foodFormSlice.actions;

export default foodFormSlice.reducer;