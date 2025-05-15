import { createSlice } from "@reduxjs/toolkit";
import { filterByName, filterByRole, filterByStatus, getWorkers, getWorkersById, sortByName } from "../api/workersApi";


export const workersSlice = createSlice({
    name: "employees",
    initialState: {
        data: [],
        data2: [],
        dataById: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getWorkers.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getWorkersById.fulfilled, (state,action)=>{
            state.dataById = action.payload
        })
         builder.addCase(filterByName.fulfilled, (state, action) => {
            state.data = action.payload
        })
         builder.addCase(filterByRole.fulfilled, (state, action) => {
            state.data = action.payload
        })
         builder.addCase(filterByStatus.fulfilled, (state, action) => {
            state.data = action.payload
        })
         builder.addCase(sortByName.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default workersSlice.reducer