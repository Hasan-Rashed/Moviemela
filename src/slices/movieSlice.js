import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


// Action getPopularMovies
export const getPopularMovies = createAsyncThunk("movies/getPopularMovies", async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API}&language=en-US`);
        return response.data.results;
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
