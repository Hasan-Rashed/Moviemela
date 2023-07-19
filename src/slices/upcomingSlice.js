import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


// Action getPopularMovies
export const getUpcomingMovies = createAsyncThunk("movies/getUpcomingMovies", async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_API}&language=en-US`);
        return response.data.results;
    }
);


const upcomingSlice = createSlice({
    name: "upcoming",
    initialState: {
        isLoading: false,
        data: null,
        error: null
    },

    extraReducers: (builder) => {

        builder.addCase(getUpcomingMovies.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        
        builder.addCase(getUpcomingMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = null;
        });

        builder.addCase(getUpcomingMovies.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
        
    }
});


export default upcomingSlice.reducer;
