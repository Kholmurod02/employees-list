import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASIC_URL } from "../config/config";
import toast from "react-hot-toast";


export const getWorkers = createAsyncThunk("employees/getWorkers",
    async () => {
        try {
            const { data } = await axios.get(BASIC_URL)
            return data
        } catch (error) {
            console.error(error);

        }
    }
)

export const addWorker = createAsyncThunk("employees/addWorker",
    async (newWorker,{dispatch}) => { 
        try {
            await axios.post(BASIC_URL,newWorker)
            toast.success("Successfully Added")
            dispatch(getWorkers())
        } catch (error) {
            toast.error("Something goes wrong !")
            console.error(error); 
        }
    }
)

export const updateWorker = createAsyncThunk("employees/updateWorker",
    async (editedWorker,{dispatch}) => { 
        try {
            await axios.put(`${BASIC_URL}/${editedWorker.id}`,editedWorker)
            toast.success("Successfully Updated ")
            dispatch(getWorkers())
        } catch (error) {
             toast.error("Something goes wrong !")
            console.error(error); 
        }
    }
)

export const removeWorkers = createAsyncThunk("employees/removeWorkers",
    async (id,{dispatch})=>{
        try {            
        await axios.delete(`${BASIC_URL}/${id}`)
        toast.success("Successfully removed")
            dispatch(getWorkers())
        } catch (error) {
             toast.error("Something goes wrong !") 
            console.error(error);
            
        }
    }
)

export const getWorkersById = createAsyncThunk("employees/getWorkersById",
    async (id) => {
        try {
            const { data } = await axios.get(`${BASIC_URL}/${id}`)
            return data
        } catch (error) {
            console.error(error);

        }
    }
)

export const filterByName = createAsyncThunk("employees/filterByName",
    async (name) => {
        try {
            const { data } = await axios.get(`${BASIC_URL}?name=${name}`)
            return data
        } catch (error) {
            console.error(error);

        }
    }
)

export const filterByRole = createAsyncThunk("employees/filterByRole",
    async (role) => {
        try {
            const { data } = await axios.get(`${BASIC_URL}?role=${role}`)
            return data
        } catch (error) {
            console.error(error);

        }
    }
)

export const filterByStatus = createAsyncThunk("employees/filterByStatus",
    async (status) => {
        try {
            const { data } = await axios.get(`${BASIC_URL}?isArchive=${status}`)
            return data
        } catch (error) {
            console.error(error);

        }
    }
)

export const sortByName = createAsyncThunk("employees/sortByName",
    async () => {
        try {
            const { data } = await axios.get(`${BASIC_URL}?sortBy=name`)
            return data
        } catch (error) {
            console.error(error);

        }
    }
)

