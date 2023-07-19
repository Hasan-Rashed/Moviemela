import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


// Action getNowPlayingMovies
export const getNowPlayingMovies = createAsyncThunk("movies/getNowPlayingMovies", async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API}&language=en-US`);
        return response.data.results;
    }
);


const nowPlayingSlice = createSlice({
    name: "upcoming",
    initialState: {
        isLoading: false,
        data: null,
        error: null
    },

    extraReducers: (builder) => {

        builder.addCase(getNowPlayingMovies.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        
        builder.addCase(getNowPlayingMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = null;
        });

        builder.addCase(getNowPlayingMovies.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
        
    }
});


export default nowPlayingSlice.reducer;
