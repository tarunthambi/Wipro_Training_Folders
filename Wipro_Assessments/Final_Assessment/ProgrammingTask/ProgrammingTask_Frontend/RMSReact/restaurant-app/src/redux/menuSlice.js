import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMenuItems = createAsyncThunk('menu/fetchMenuItems', async () => {
    const response = await axios.get('http://localhost:5195/api/Menu');
    return response.data;
});

const menuSlice = createSlice({
    name: 'menu',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMenuItems.fulfilled, (state, action) => action.payload);
    }
});

export default menuSlice.reducer;
