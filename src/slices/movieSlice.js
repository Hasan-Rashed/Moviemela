import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


// Action
export const getPopularMovies = createAsyncThunk("movies/getPopularMovies", async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API}&language=en-US&page=1`);
        return response.data.results;
        // return response.data;
    }
);


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        isLoading: false,
        data: null,
        error: false
    },

    extraReducers: (builder) => {

        builder.addCase(getPopularMovies.pending, (state, action) => {
            state.isLoading = true;
            state.error = false;
        });
        
        builder.addCase(getPopularMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = false;
        });

        builder.addCase(getPopularMovies.rejected, (state, action) => {
            state.isLoading = false;
            console.log('Error', action.payload)
            state.error = true;
        });
        
    }
});


export default movieSlice.reducer;




// export const movieSlice = createSlice({
//     name: "movie",
//     initialState: {
//         pending: null,
//         error: false
//     },
//     reducers: {},
//     extraReducers: {
//         [getPopularMovies.pending]: (state, action) => {
//             state.pending = true;
//             state.error = false;
//         },
        
//         [getPopularMovies.fulfilled]: (state, action) => {
//             state.pending = false;
//             return action.payload;
//         },

//         [getPopularMovies.rejected]: (state, action) => {
//             state.pending = false;
//             state.error = true;
//         }
//     }

// });

// export const { setMovies } = movieSlice.actions;
// export default movieSlice.reducer;

