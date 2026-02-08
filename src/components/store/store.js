import { configureStore } from "@reduxjs/toolkit";
import foodFormReducer from "./slices/food_form_slice";


export const store = configureStore({
    reducer: {
        foodForm: foodFormReducer,
    },
})