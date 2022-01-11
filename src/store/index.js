import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './movie-slice';
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        ui: uiSlice.reducer
    }
});

export default store;