import {configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit"
import authReducer from "./auth/authSlice"

export const store = configureStore({
    reducer: {
        
    }
})