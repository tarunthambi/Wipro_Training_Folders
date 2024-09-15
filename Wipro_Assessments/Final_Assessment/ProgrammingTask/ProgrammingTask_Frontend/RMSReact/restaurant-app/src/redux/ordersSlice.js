import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const response = await axios.get('http://localhost:3001/order');
    return response.data;
});

const ordersSlice = createSlice({
    name: 'orders',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.fulfilled, (state, action) => action.payload);
    }
});

export default ordersSlice.reducer;
