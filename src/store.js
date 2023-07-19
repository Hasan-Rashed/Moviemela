import { combineReducers, configureStore } from '@reduxjs/toolkit';
import getPopularMovies from './slices/movieSlice.js'
import  getTopRatedMovies  from './slices/topRatedSlice.js';
import  getUpcomingMovies  from './slices/upcomingSlice.js';
import  getNowPlayingMovies  from './slices/nowPlayingSlice.js';



const rootReducer = combineReducers({
    moviesRoot: combineReducers({
        movies: getPopularMovies,
        top_rated: getTopRatedMovies,
    }),
    moviesRoot2: combineReducers({
        upcoming: getUpcomingMovies,
        now_playing: getNowPlayingMovies,
    }),
});


export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
});