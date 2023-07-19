import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


// Action getTopRatedMovies
export const getTopRatedMovies = createAsyncThunk("movies/getTopRatedMovies", async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API}&language=en-US`);
        return response.data.results;
    }
);


const topRatedSlice = createSlice({
    name: "top_rated",
    initialState: {
        isLoading: false,
        data: null,
        error: null
    },

    extraReducers: (builder) => {

        builder.addCase(getTopRatedMovies.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        
        builder.addCase(getTopRatedMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = null;
        });

        builder.addCase(getTopRatedMovies.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});


export default topRatedSlice.reducer;
