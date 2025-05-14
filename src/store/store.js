import { configureStore } from "@reduxjs/toolkit";
import   workersSlice   from "../reducers/employeesSlice";

export const store = configureStore({
    reducer: {
        workersSlice
    }
})