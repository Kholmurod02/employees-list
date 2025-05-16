import { createSlice } from "@reduxjs/toolkit";
import { filterByName, filterByRole, filterByStatus, getWorkers, getWorkersById, sortByName } from "../api/workersApi";



export const workersSlice = createSlice({
    name: "employees",
    initialState: {
        data: [],
        dataById: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWorkers.fulfilled, (state, action) => { state.data = action.payload })
            .addCase(getWorkersById.fulfilled, (state, action) => { state.dataById = action.payload })
            .addCase(filterByName.fulfilled, (state, action) => { state.data = action.payload })
            .addCase(filterByRole.fulfilled, (state, action) => { state.data = action.payload })
            .addCase(filterByStatus.fulfilled, (state, action) => { state.data = action.payload })
            .addCase(sortByName.fulfilled, (state, action) => { state.data = action.payload })
    }
})

export default workersSlice.reducer