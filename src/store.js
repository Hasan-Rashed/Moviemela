import { combineReducers, configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice.js'
import  getTopRatedMovies  from './slices/topRatedSlice.js';



const rootReducer = combineReducers({
    movies: movieReducer,
    top_rated: getTopRatedMovies,
});


export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
});