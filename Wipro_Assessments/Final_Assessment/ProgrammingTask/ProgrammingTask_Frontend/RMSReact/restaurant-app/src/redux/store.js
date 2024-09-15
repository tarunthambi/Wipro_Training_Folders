import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './ordersSlice';
import menuReducer from './menuSlice';
import reviewsReducer from './reviewsSlice';

export const store = configureStore({
    reducer: {
        orders: ordersReducer,
        menu: menuReducer,
        reviews: reviewsReducer,
    }
});
