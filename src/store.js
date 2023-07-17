import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice.js'


export default configureStore({
    reducer: {
        movies: movieReducer,
    }
});