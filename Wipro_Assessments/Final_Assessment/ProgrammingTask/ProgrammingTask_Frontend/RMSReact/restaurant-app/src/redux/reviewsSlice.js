import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
    const response = await axios.get('http://localhost:5256/api/Review');
    return response.data;
});

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchReviews.fulfilled, (state, action) => action.payload);
    }
});

export default reviewsSlice.reducer;
