import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice.js'



// export const store = configureStore({
//     reducer: {
//         movie: movieReducer,
//     }
// });

export default configureStore({
    reducer: {
        movies: movieReducer,
    }
});